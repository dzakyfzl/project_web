const express = require('express')
const path = require('path')
const app = express()
const port = '3000'

//Menyediakan semua image pada folder src ke online
app.use('/src',express.static(path.join(__dirname, 'src')))

//merender index.html
app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

//Memulai Server untuk merender HTML
app.listen(port,()=>{
    console.log(`server start in http://localhost:${port}`)
})