const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res)=>{

    res.send("Hello from index.js")
    
})

app.get('*',(req, res)=>{

    res.status(404).send("Error404")

})

app.listen(process.env.PORT)

