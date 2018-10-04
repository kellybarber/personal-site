const nodemailer = require('nodemailer')

exports.sendMail = async (req, res) => {
  try {
    const { name, email, message } = req.body
    if ( !name || !email || !message ) throw 'Please Fill Out All Fields'

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
      }
    })
    
    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: name,
      text: message,
      replyTo: email
    }
    
    await transporter.sendMail(mailOptions)

    res.send({ response: 'Your Email Has Been Sent!', type: 'success' })

  } catch (error) {
    console.log('Send Mail Error: ', error)
    res.send({ response: error, type: 'error' })
  }
}