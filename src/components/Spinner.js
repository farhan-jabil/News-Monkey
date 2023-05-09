import React from 'react'
import loading from '../images/Walk.gif'

const Spinner = () => {
    return (
      <div className='text-center'>
        <img className='mt-1 mb-3' src={loading} alt=""/>
      </div>
    )
}

export default Spinner
