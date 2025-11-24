import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getAllProducts = async (req,res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products)
  } catch (error) {
    res.status(500).send({message: error.message})
  }
}

export const getProductById = async (req,res) => {
  try {
    // const product = await Product.findById(req.params.id);
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}

export const updateProductById = async (req,res) => {
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
}

export const deleteProductById = async (req,res) => {
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
}