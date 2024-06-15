const express = require('express');
//import * as ejs from 'ejs';
const app = express();
import connectDB from './db';
import path from 'path';
require('dotenv').config();
import { Product } from "./product"; 
import methodOverride from 'method-override'


app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}));
console.log(`MONGO_URL = ${process.env.MONGO_URL}`);
// Connect to MongoDB
connectDB();

app.get('/products/new', (_req,res) => {
    res.render('products/new')
})

app.post('/products', async (req, res) => {
    const newProduct =  new Product(req.body)
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products',async (_req, res)=>{
    const products = await Product.find({});
    res.render('products/index', {products});
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show', {product})

})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', {product})
})

app.put('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    if (product) {
        console.log(req.body); 
        res.redirect(`/products/${product._id}`);
    } else {
        res.status(404).send('Product not found');
      }
})

app.delete('/products/:id', async(req, res) =>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id, req.body, );
    res.redirect('/products');
})

app.listen(5000, () => {
    console.log("APP IS LISTENING ON PORT 5000");
})