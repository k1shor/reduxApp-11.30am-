import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

const Cart = () => {
    const cart = useSelector(store=>store.cart)
    const cart_items = cart.cart_items

    const dispatch = useDispatch()
    return (
        <>
            <Navbar />

            <h3>CART ITEMS</h3>

            <div className='container my-3 mx-auto'>
                {
                cart_items.length > 0 
                ?
                <table className='table'>
                    <thead>
                        <tr>
                            <td>S.No.</td>
                            <td>Product Image</td>
                            <td>Product Details</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart_items.map((item,i)=>
                                <tr>
                                    <td>{i+1}</td>
                                    <td><img src={item.image} alt={item.name} style={{"height":"150px"}}/></td>
                                    <td>
                                        <h4>{item.name}</h4>
                                        <h5>{item.price}</h5>
                                        <p>{item.description}</p>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={()=>{
                                            dispatch({type:"REMOVE_FROM_CART", payload:item})
                                        }}>Remove</button>
                                    </td>
                                </tr>
                            )
                        }
                        <tr>
                            <td colSpan={4}><a href="#" className='nav-link text-center pe-auto' onClick={()=>{
                                dispatch({type:"EMPTY_CART"})
                            }}>EMPTY THE CART</a></td>
                        </tr>


                    </tbody>
                </table>
                :
                <div className='text-center h4'>There are no items in the cart.</div>
            }
            </div>
        </>
    )
}

export default Cart