import React, { Component } from 'react'
import { sendMail } from '../helpers/icons'

class ContactForm extends Component {

  state = { name: '', email: '', message: '' }

  handleInput = e => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value })
  }

  onSubmit = e => {
    e.preventDefault()
    console.log('submit')
    
  }

  render() {
    const { name, email, message } = this.state

    return (
      <form className='contact-form' onSubmit={this.onSubmit}>
        <div className='contact-form__inputs'>
          <div className='contact-form__credentials'>
            <input 
              className='contact-form__input'
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={this.handleInput}
            />
            <input 
              className='contact-form__input'
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleInput}
            />
          </div>
        <textarea 
          className='contact-form__message'
          type='text'
          placeholder='Message'
          name='message'
          value={message}
          onChange={this.handleInput}
        />
      </div>
      <button className='contact-form__send'>
        {sendMail}
      </button>
    </form>
    )
  }
}

export default ContactForm