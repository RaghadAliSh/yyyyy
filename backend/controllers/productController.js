// Put Your Code Here
const mongoose = require("mongoose");
const Product = require('../models/productModel')
const multer  = require('multer')

const createNewProduct= async (req, res) => {
    const { name, price, description,quantity,category ,productType} = req.body;
    const imageName = req.file.filename;
      try {
        const newProduct = await Product.create({
          name,
          price,
          description,
          image: imageName,
          quantity,
          category,
          productType:"normal product",
        });
    
        res.status(200).json({ message: 'Product created successfully!', product: newProduct });
      } catch (error) {
        console.error('Error creating product:', error.message);
        res.status(500).json({ message: 'Error creating product' });
      }
  }
  const getProuduct=async (req,res)=>{
    const product = await  Product.find();
      res.json(product)
  }
  const editProduct=async (req, res) => {
    const { id } = req.params;
    const { field, value } = req.body; 
  
    if (!field || !['price', 'quantity'].includes(field)) {
      return res.status(400).send('Invalid update field');
    }
  
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, {
        [field]: value, 
      }, { new: true }); 
  
      if (!updatedProduct) {
        return res.status(404).send('Product not found');
      }
  
      res.send(updatedProduct); 
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  }
  module.exports = { createNewProduct,getProuduct,editProduct}