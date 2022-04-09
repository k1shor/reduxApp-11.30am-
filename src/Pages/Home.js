import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Home = () => {
  const store = useSelector(store => store.items)
  const [search, setSearch] = useState('')
  const [filteredResult, setFilteredResult] = useState([])
  const [limit, setLimit] = useState(8)
  const itemsInStore = store.items

  useEffect(() => {
    setFilteredResult(itemsInStore.filter((item) => item.product_name.toLowerCase().match(search.toLowerCase())))
    console.log(filteredResult)
  }, [search])
  // console.log(store.items)
  return (
    <>
      <Navbar />

      <div className='container w-50 my-4'>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) =>
            setSearch(e.target.value)
          } />
          {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
      </div>

<div className='container-fluid'>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
        {
          filteredResult.slice(0, limit).map((item, i) =>
            <Card key={i} name={item.product_name} price={item.product_price} description={item.product_description} image={item.product_image} />)
        }
      </div>
      {
        limit < filteredResult.length ?
        <div className='container text-center my-2'>
          <button className='btn btn-warning' onClick={() => {
            setLimit(limit + 4)
          }}>Load more</button>
        </div>
        :
        <div className='container text-center my-2'>
          All items loaded
        </div>
      }
      </div>
    </>
  )
}

export default Home