const express = require('express') //Express
const path = require('path')
const app = express()
const port = '3000'//Port Localhost

//Menyediakan semua image pada folder src ke online
app.use('/src',express.static(path.join(__dirname, 'src')))

//merender index.html
app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

//Memulai Server
app.listen(port,()=>{
    console.log(`server start in http://localhost:${port}`)
})