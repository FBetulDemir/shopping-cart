enum Categories {
  ELECTRONICS = "Electronics",
  GROCERIES = "Groceries",
  CLOTHING = "Clothing",
}

interface Product {
  id: number;
  price: number;
  category: Categories;
}
