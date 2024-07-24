import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

const productsData = [
  {
    id: 1,
    title: "Product a",
    description: "This is a long description of Product 1.",
    image: "https://picsum.photos/150",
    price: 100,
    rating: 4.5
  },
  {
    id: 2,
    title: "Product b",
    description: "This is a long description of Product 2.",
    image: "https://picsum.photos/150?random=1",
    price: 150,
    rating: 4.0
  },
  {
    id: 3,
    title: "Product c",
    description: "This is a long description of Product 3.",
    image: "https://picsum.photos/150?random=2",
    price: 200,
    rating: 4.8
  },
  {
    id: 4,
    title: "Product d",
    description: "This is a long description of Product 4.",
    image: "https://picsum.photos/150?random=3",
    price: 250,
    rating: 5.0
  }
];

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [selectedProducts, setSelectedProducts] = useState([]);


  const addProductToCart = (product) => {
    console.log('addProductToCart provider',product);
    setSelectedProducts((prev) => [...prev, product]);
  };

  const clearCart = () => {
    setSelectedProducts([]);
  };

  return (
    <ProductContext.Provider value={{ products, addProductToCart, selectedProducts, clearCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
