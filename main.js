const express = require("express")
require('dotenv').config()
const sequelize = require('./db')
const models = require('./models/models')
const CryptoJS = require('crypto-js')
const cors = require('cors')
const PORT = process.env.PORT || 3100
const app = express()
const router = require('./routes/index')

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.get('/', (req, res)=>{
  res.status(200).json({message:'juriev 11-ES322'})
})

const start = async () => {
  try{   
    let passwd = CryptoJS.SHA256("test")
    console.log(passwd.toString(CryptoJS.enc.Hex));
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server start on ${PORT}`))
  }  
  catch(e){
    console.log(e)
  }
}
start()