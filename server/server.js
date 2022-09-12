require('dotenv').config()
const express = require("express")
const databaseconnection = require('./connectors/dbconnection')
const app = express()
const cors = require("cors")
const fileUpload = require("express-fileupload")
//Connecting Database

databaseconnection();


app.use(express.json());
app.use(cors())
app.use(fileUpload({
    useTempFiles:true
}))

//Routes
app.use('/api',require('./routes/blogRouter'));
//For image
app.use('/api',require('./routes/upload'));

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('Server  is running on port',PORT);
})