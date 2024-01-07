import React from 'react'
import './app.css'
import Form from './components/Form/Form'
const App = () => {
  return (
    <div className='main-contact'>
      <header className='header-contact'>
        <h2 className='title-contact'>
          Content App
        </h2>
        <p className='description-title'>
          <span className='react-content'>
            React js
          </span>
          |
          <span>
            Programming practice
          </span>
        </p>
      </header>
      <main>
        <Form />
      </main>
    </div>
  )
}

export default App
