"use strict";
var Categories;
(function (Categories) {
    Categories["ELECTRONICS"] = "Electronics";
    Categories["GROCERIES"] = "Groceries";
    Categories["CLOTHING"] = "Clothing";
})(Categories || (Categories = {}));
const products = [
    { id: 1, name: "Laptop", price: 999.99, category: Categories.ELECTRONICS },
    { id: 2, name: "T-Shirt", price: 19.99, category: Categories.CLOTHING },
    { id: 3, name: "Bananas", price: 1.99, category: Categories.GROCERIES },
];
const shoppingCart = [];
const addToCart = (product) => { };
const calculateTotal = (cart) => {
    let total = 0;
    let message = `Total amount to be paid is ${total}`;
    return message;
};
const displayCart = (cart) => { };
