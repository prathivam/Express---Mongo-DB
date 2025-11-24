import express from "express";
const app = express();
import mongoose from "mongoose";
import Product from "./models/product.model.js";


app.use(express.json());

// Connecting to MongoDB
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

  // Home Page Route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Create a Product
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


// Get all Products
app.get('/api/products', async (req,res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products)
  } catch (error) {
    res.status(500).send({message: error.message})
  }
})

// Get a Specific Product by ID
app.get('/api/product/:id', async (req,res) => {
  try {
    // const product = await Product.findById(req.params.id);
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send({message: error.message});
  }
})

// Updating a Product by ID
app.put('/api/product/:id', async (req,res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body)

    if(!product){
      return res.status(404).send("Product not found");
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);

  } catch (error) {
    res.status(500).send({message: error.message});
  }
})

// Deleting a Product By ID
app.delete('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params    
    const product = await Product.findByIdAndDelete(id);
    if(!product){
      return res.status(404).send("Product not found");
    }
    res.status(200).send("Product Deleted Successfully");
  } catch (error) {
    res.status(500).send({message: error.message})
  }
})