import React from 'react'
import './App.css'
import InputField from './components/InputField'

const App: React.FC= () => {
  return (
    <div className='todo__container'>
      <h2 className='heading__container'>Task Easy</h2>
      <InputField />
      </div>
  )
}

export default App
