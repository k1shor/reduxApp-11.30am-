import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Main = () => {
  const cart = useSelector(store=>store.cart)

  const game = useSelector(store=>store.game)
  console.log(cart.cart_item)
  const [gameName, setGameName] = useState("")
  const [playerName, setPlayerName] = useState("")
  
  const dispatch = useDispatch()
    return (
    <>
    No. of items in the cart: {cart.cart_item}
    
    <br/>
    <button onClick={()=>{dispatch({type:"ADD_TO_CART"})}}>Add to Cart</button>
    <button onClick={()=>{dispatch({type:"REMOVE_FROM_CART"})}}>Remove From Cart</button>
    <button onClick={()=>{dispatch({type:"RESET"})}}>Clear Cart</button>
    <br/>
    <br/>
    Game: {game.gameName}
    <br/>
    <input type={'text'} placeholder='enter game name here' onChange={(e)=>setGameName(e.target.value)}/>
    <button onClick={()=>dispatch({type:"UPDATE_GAME",payload:gameName})}>Update Game</button>

    <br/>
    Player: {game.playerName}
    <br/>
    <input type={'text'} placeholder='enter player name here' onChange={(e)=>setPlayerName(e.target.value)}/>
    <button onClick={()=>dispatch({type:"UPDATE_PLAYER",payload:playerName})}>Update Player</button>


    </>
  )
}

export default Main