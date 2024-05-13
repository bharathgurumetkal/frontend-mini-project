import React from 'react'
import { useLocation,useNavigate} from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { GoArrowLeft} from 'react-icons/go'
import './Product.css'

function Product() {
  let {state}=useLocation()
  let navigate=useNavigate()
  return (
    <div>
      <div className="d-flex">
      <div className="product-image">
        <img className='pimage m-5 border  rounded bg-white p-5' src={state[3]} alt="" />
      </div>
      <div className="product-details">
        <h1 className='border-bottom pb-3 border-danger'>{state[0]}</h1>
        <p className='lead mt-1 mb-5 price'>${state[5]}</p>
        <h5>Description</h5>
        <p className='mt-1 mb-5'>{state[2]}</p>
        <h5>Rating: <span className='text-danger'>{state[4]}</span><span className='text-warning text-center m-1 fs-4'><FaStar/></span></h5>
      </div>
      </div>
      <div className="Back-btn">
      <button className="btn fs-4 mb-3" onClick={()=>navigate('/')}><GoArrowLeft className='fs-3'/>Back</button>
      </div>
    </div>
  )
}

export default Product