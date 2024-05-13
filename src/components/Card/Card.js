import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
import Product from '../Product/Product'

function Card(props) {
    let navigate=useNavigate()
    let product=[props.title,props.id,props.description,props.image,props.rate,props.price]
  return (
    <div>    
        <div className="card mb-5 shadow-lg">
            <div className="card-body">
                <img src={props.image} alt="" className='image w-50 mx-auto d-block' />
                <h5 className='p-1 text-center'>{props.title}</h5>
                <button className='btn btn-primary mx-auto d-block ' onClick={()=>navigate(`product/${product[0]}`,{state:product})}>Details</button>

            </div>
        </div>
    </div>
  )
}

export default Card