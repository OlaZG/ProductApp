"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const db_1 = __importDefault(require("./db"));
(0, db_1.default)();
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
product_1.Product.insertMany(seedPoducts).then(res => {
    console.log(res);
}).catch(e => {
    console.log(e);
});
//# sourceMappingURL=seeds.js.map