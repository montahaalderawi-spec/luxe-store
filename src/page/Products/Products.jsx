import React, { useEffect, useState } from "react";

import './Products.css';
import { data } from "react-router-dom";

const Products = () => {
  const [products,setProducts]=useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      }) 
    .catch((error)=>{
      console.log("Error fetching data:",error);
      setLoading(false);
      });
  },[]);
      
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-container">
    <h2> Products page </h2>

    <div className="search-bar">
        <input
          type="text"
          placeholder="Search for premium products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
    </div>

    {loading ? (
        <div className="loading-message">
          Loading premium products... ⏳
        </div>
      ) : (
    <div className="products-grid">
        {filteredProducts.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.thumbnail} alt={item.title} className="product-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
      
      )}
  </div>
);
};
export default Products;