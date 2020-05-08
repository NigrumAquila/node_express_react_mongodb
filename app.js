const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

const userRoutes = require('./routes/user')

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node_react_mongodb`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/user', userRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    })
}

module.exports = app