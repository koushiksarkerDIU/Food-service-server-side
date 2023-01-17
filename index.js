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

const Food = client.db('food').collection('foodDetails')


app.get('/foods', async (req, res) => {
    try {
        const cursor = Food.find({});
        const foodsDetails = await cursor.toArray();
        res.send({
            success: true,
            message: "all food details",
            data: foodsDetails
        })
    } catch (error) {
        console.log(error);
        res.send({
            success: false,
            error: error.message
        })
    }
})


app.listen(Port, () => {
    console.log("server is running", Port)
})