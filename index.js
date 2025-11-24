import express from "express";
const app = express();
import mongoose from "mongoose";
import Product from "./models/product.model.js";


app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://prathisahrudh_db_user:oegj4QzHVcKRd3ZW@backendapi.gxgylra.mongodb.net/?appName=BackendAPI"
  )
  .then(() => {
    console.log("Connected to Database");
    app.listen(3000, () => {
      console.log("Server is running " + `http://localhost:3000`);
    });
  })
  .catch((err) => {
    console.log("Connection Failed");
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get('/api/products', async (req,res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products)
  } catch (error) {
    res.status(500).send({message: error.message})
  }
})

app.post('/api/products', async (req,res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({message: error.message})
    }
    // console.log(req.body);
    // res.send(req.body)
})