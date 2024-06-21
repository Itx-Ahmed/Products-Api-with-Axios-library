import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);

  const axiosapi = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      console.log(response.data.products);
      setProducts(response.data.products); // Assuming response.data.products is an array
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    axiosapi();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Availability Status</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Description</th>
            <th>Image</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.availabilityStatus}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>{item.image}</td>
              <td>{item.price}</td>
              <td>{item.rating}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
