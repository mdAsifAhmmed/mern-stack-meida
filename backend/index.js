import  express  from "express";
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
// components
// import Router from "./Routers/route.js"
import Connetion from "./database/db.js"


dotenv.config()
const app = express()


app.use(cors())
app.use(express.json)
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
// app.use('/', Router)


const port = process.env.PORT;
const password = process.env.MONGODB_PASS


Connetion(password)
app.listen(port,()=> console.log(`server is ruing ${port}`))

