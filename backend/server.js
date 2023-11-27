const express =  require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    
    useNewUrlParser :true,
    UseUnifiedTopology :true,
    


}

);

const connection = mongoose.connection;
connection.once("open",()=>
{
    console.log("mongoDB connection successful");
}

)

/*app.listen(PORT,()=>

{
    console.log('server is up and runnging on port : ${String(PORT)} ');
})*/
///bard code 
app.listen(PORT);

console.log('Server is up and running on port:', PORT);
