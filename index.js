const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json())

const Port = process.env.Port || 5000;


const uri = "mongodb+srv://onlineFoodDelivery:z6xWzDANvuUJO3yJ@cluster0.z0daowb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
    try {
        await client.connect();
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}

run();


app.listen(Port, () => {
    console.log("server is running", Port)
})