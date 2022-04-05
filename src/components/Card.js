import React from 'react'
import './card.css'

const Card = (props) => {
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={props.image} className="card-img-top" alt={props.name} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.name}</h5>
                        <h5 className='card-title'>{props.price}</h5>
                        <p className="card-text">{props.description}</p>
                        <button className='btn btn-warning'>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card