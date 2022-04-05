import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Home = () => {
  const store = useSelector(store=>store.items)
  const itemsInStore = store.items
  // console.log(store.items)
  return (
    <>
      <Navbar />


      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
        {
          itemsInStore.map(item=>
            <Card name={item.product_name} price={item.product_price} description={item.product_description} image={item.product_image}/>)
        }
        
      </div>
    </>
  )
}

export default Home