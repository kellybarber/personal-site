import React, { Component } from 'react'

class ContactForm extends Component {

  state = { name: '', email: '', message: '' }

  handleInput = e => {
    console.log(e.target)
    
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
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={this.handleInput}
            />
            <input 
              type='text'
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleInput}
            />
          </div>
        <input 
          type='text'
          placeholder='Message'
          name='message'
          value={message}
          onChange={this.handleInput}
        />
      </div>
      <button>Send</button>
    </form>
    )
  }
}

export default ContactForm