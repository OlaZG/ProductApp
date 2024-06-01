import { Product } from "./product"; 
import connectDB from './db';

// Connect to MongoDB
connectDB();

// const p = new Product( {
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save().then(p => {
//     console.log(p);
// })
// .catch(e =>{
//     console.log(e);
// })

const seedPoducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.70,
        category: 'dairy'
    },
];

Product.insertMany(seedPoducts).then(res => {
        console.log(res);
    }).catch(e =>{
        console.log(e);
    });

