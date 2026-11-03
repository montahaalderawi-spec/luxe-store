import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    description: ''
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log("New Product Added:", newProduct);
    alert("Product added successfully! 🎉");
   
    setNewProduct({ title: '', price: '', description: '' }); 
  };
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>LUXE Dashboard</h2>
        <p>Manage your store overview and products</p>
      </div>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Products</h3>
          <p>120</p>
        </div>
        <div className="stat-card">
          <h3>Pending Orders</h3>
          <p>14</p>
        </div>
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p>$12,450</p>
        </div>
      </div>

      <div className="dashboard-content">
        <h3>Add New Product</h3>
        <form onSubmit={handleAddProduct} className="add-product-form">
          <div className="input-group">
            <label>Product Title</label>
            <input 
              type="text" 
              placeholder="e.g. Luxury Gold Watch" 
              value={newProduct.title}
              onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
              required 
            />
          </div>
          
          <div className="input-group">
            <label>Price ($)</label>
            <input 
              type="number" 
              placeholder="e.g. 199.99" 
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              required 
            />
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea 
              placeholder="Enter product details..." 
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              required 
            ></textarea>
          </div>
          
          <button type="submit" className="add-btn">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;