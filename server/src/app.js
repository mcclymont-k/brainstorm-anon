console.log('Hello Kieran')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/fakeData')
let db = mongoose.connection

// Check for database errors
db.on('error', (err) => console.log(err))

// Check for connection
db.once('open', () => console.log("Connected to MongoDB..."))

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

let names = require('./model/names')

app.get('/names', (req, res) => {
  names.find({}, (err, names) => {
    res.send(names)
  })
})

app.post('/names', (req, res) => {
  console.log(req.params)
})

app.post('/register', (req, res) => {
  res.send({
    message: 'Hello there, thanks for the email'
  })
})
app.listen(process.env.PORT || 8081)
