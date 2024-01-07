import React, { useState } from 'react'
import './../../app.css'
const formKeys = {
    name: '',
    lastName: '',
    email: "",
    phoneNumber: ''
}
const Form = () => {
    // all contacts
    const [contacts, setContacts] = useState([])
    // form value
    const [contact, setContact] = useState(formKeys)
    // change inputs
    const changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

    }

    return (
        <div className='form-contact'>
            <input onChange={changeHandler} value={contact.name} placeholder='Name' type="text" name='name' />

            <input onChange={changeHandler} value={contact.name} placeholder='Last Name' type="text" name='lastName' />

            <input onChange={changeHandler} value={contact.email} placeholder='email' type="email" name='email' />

            <input onChange={changeHandler} value={contact.name} placeholder='phoneNumber' type="number" name='phoneNumber' />
            <button> Add content</button>

        </div>
    )
}

export default Form
