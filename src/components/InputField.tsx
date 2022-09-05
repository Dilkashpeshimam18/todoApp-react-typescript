import React from 'react'
import './InputField.css'


const InputField = () => {
  return (

    <div className='input__div'>
      <form>
        <input className='input__container' type='input' placeholder='Enter your task...' />
        <button className='input__button' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default InputField