const express = require("express")

 const app = express()
 app.use(express.static('public'))
 app.get('/',(req,res)=>{
    console.log(req.url)
    res.sendFile(__dirname + 'index.html')
 })
const PORT = 3010
 app.listen(PORT,()=>{
    console.log(`Server startex at http://localhost:${PORT}`)
 })