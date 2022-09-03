import React from 'react'
import pageError from '../img/404-error.png'
import './css/pageError.css'

export default function Cartempty() {
  return (
    <div >
        <div className="errorPage">
        <h2 className='errorHead'>Cart is Empty</h2>
        <img className='errorImg' src={pageError} alt="" />
        <div className='errorParaDiv'>
        <p className='errorPara'>Sorry,We couldn't find the page your were trying to access. </p>
        <p className='errorPara'>Try going back to Home page</p>
        </div>
        </div>

    </div>
  )
}