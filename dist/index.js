"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const db_1 = __importDefault(require("./db"));
const path_1 = __importDefault(require("path"));
const product_1 = require("./product");
const method_override_1 = __importDefault(require("method-override"));
app.use((0, method_override_1.default)('_method'));
app.set('views', path_1.default.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
(0, db_1.default)();
app.get('/products/new', (_req, res) => {
    res.render('products/new');
});
app.post('/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = new product_1.Product(req.body);
    yield newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
}));
app.get('/products', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.Product.find({});
    res.render('products/index', { products });
}));
app.get('/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.Product.findById(id);
    console.log(product);
    res.render('products/show', { product });
}));
app.get('/products/:id/edit', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.Product.findById(id);
    res.render('products/edit', { product });
}));
app.put('/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    if (product) {
        console.log(req.body);
        res.redirect(`/products/${product._id}`);
    }
    else {
        res.status(404).send('Product not found');
    }
}));
app.delete('/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield product_1.Product.findByIdAndDelete(id, req.body);
    res.redirect('/products');
}));
app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000");
});
//# sourceMappingURL=index.js.map