const express = require('express')
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
const User = require('./model/user-model')
const app = express()

app.use(express.json())
const cors = require('cors')
app.use(cors())
const jwt = require('jsonwebtoken')

mongoose.connect('mongodb://localhost:27017/authRel')


app.listen(1337, () => {
    console.log('server started')
})

