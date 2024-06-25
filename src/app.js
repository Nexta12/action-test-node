const express = require("express")
const app = express()

app.get("/testNode", (req, res)=>{
    res.status(200).send("Yes It Works")
})

module.exports =app