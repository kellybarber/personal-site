const router = require('express').Router()
const { sendMail } = require('../controllers/send')

router.post('/mail', sendMail)

module.exports = router