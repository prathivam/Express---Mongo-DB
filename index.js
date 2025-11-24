import express from "express";
import mongoose from "mongoose";
import ProductRoutes from './routes/product.route.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

// Routes
app.use('/api/products', ProductRoutes);