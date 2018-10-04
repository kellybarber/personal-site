import React, { Component } from 'react'
import { sendMail } from '../helpers/icons'
import post from '../helpers/post'

class ContactForm extends Component {

  state = { name: '', email: '', message: '', response: '' }

  handleInput = e => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value })
  }

  onSubmit = async e => {
    e.preventDefault()
    const { name, email, message } = this.state
    
    const { response, type } = await post('/api/send/mail', { name, email, message })
    
    if (type === 'success') this.setState({ name: '', email: '', message: '', response })
    else this.setState({ response })
  }

  render() {
    const { name, email, message, response } = this.state

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
        <div className='contact-form__response'>{response}</div>
      </div>
      <button className='contact-form__send'>
        {sendMail}
      </button>
    </form>
    )
  }
}

export default ContactForm