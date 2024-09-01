enum Categories {
  ELECTRONICS = "Electronics",
  GROCERIES = "Groceries",
  CLOTHING = "Clothing",
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: Categories;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999.99, category: Categories.ELECTRONICS },
  { id: 2, name: "T-Shirt", price: 19.99, category: Categories.CLOTHING },
  { id: 3, name: "Bananas", price: 1.99, category: Categories.GROCERIES },
];

const shoppingCart: Product[] = [];

const addToCart = (product: Product): void => {};
const calculateTotal = (cart: Product[]): string => {
  let total = 0;
  let message = `Total amount to be paid is ${total}`;
  return message;
};
const displayCart = (cart: Product[]): void => {};
