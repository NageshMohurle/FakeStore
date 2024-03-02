
import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';

const constr = "mongodb://127.0.0.1:27017";

const app = express()

app.use(cors())

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Cart Home")
})

app.get("/products", async (req, res) => {
    try {
        const clientObject = await MongoClient.connect(constr)  //connect
        const database = clientObject.db("E-commerce");  //get obj database
        const documents = await database.collection("products").find({}).toArray(); //select collection
        res.send(documents)
    } catch (err) {
        res.status(500).send("Internal server error")
    }
})

app.post("/add", async (req, res) => {
    try {
        const clientObject = await MongoClient.connect(constr)
        const database = clientObject.db("E-commerce")
        const proudct = {
            "id": req.body.id,
            "title": req.body.title,
            "image": req.body.image,
            "price": req.body.price,
            "rating": req.body.rating
        }
        await database.collection("products").insertOne(proudct)
        console.log("Record Inserted")
        res.sendStatus(201);
    } catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error");
    }
})


///Update

app.put("/update/:id", async (req, res) => {
    try {
        const clientObject = await MongoClient.connect(constr)
        const database = clientObject.db("E-commerce")
        const document = await database.collection("products").updateOne({ id: 12 }, { $set: { title: "test".title, image: req.body.image, price: req.body.price, rating: req.body.rating } })
        res.send(document)
        console.log("record inserted")
    } catch (err) {
        console.log(err)
        console.log("Server error occured")
    }

})

app.listen('5000')
console.log(`Server Started : http://127.0.0.1:5000`)