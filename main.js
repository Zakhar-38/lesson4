const express = require("express")
require('dotenv').config()
const sequelize = require('./db')
const models = require('./models/models')
const CryptoJS = require('crypto-js')
const cors = require('cors')
const PORT = process.env.PORT || 8080
const app = express()
const router = require('./routes/index')
const {DataTypes} = require ('sequelize')

const {Sequelize} = require ('sequelize')
module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
      dialect:'postgres',
      host: process.env.DB_host,
      port: process.env.DB_port,
  }
)

const ToDo = sequelize.define('todo',{
  id:{type: DataTypes.INTEGER, primaryKey: true},
  title:{type: DataTypes.STRING},
  description: {type: DataTypes.STRING},
  isDone:{type: DataTypes.BOOLEAN},
})

class DataController{
  async create(req,res){
      const{id,title,description,isDone}=req.body
      const type = await ToDo.create({id,title,description,isDone})
      return res.json(type)
  }}
  module.exports = new DataController()

app.use(express.json())
app.use('/api', router)

app.get('/hw', (req, res)=>{
  res.status(200).json({message:'hello world'})
})

app.get('/', (req, res)=>{
  res.status(200).json({message:'juriev 11-ES322'})
})


  app.post('/CreateTodo', (req, res) => {
      const { id, title, description, isDone } = req.body
      const type = Todo.create({
        id, title, description, isDone
      });
      return res.json(type);
  }) 
  
app.delete('/deleteToDoWhere', (req, res) => {
  const { id, title, description, isDone } = req.body
  let Delete_ID = Number(req.params.Delete_ID)
  const type = User.destroy({ where: { id: Delete_ID } });
  res.send("!")
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