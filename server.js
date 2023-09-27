const express = require('express')  

const app = express()

// routes

app.get('/' , (req,res)=>{
    res.send('hellow Node api')
})


app.listen(4000, ()=>{
    console.log(`Node api app started at port 4000`)
})