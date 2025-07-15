"use client";
import { useState } from 'react'; 
import axios from 'axios';

export default function Home() { 
  const [formData, setFormData] = useState({ customerName: '', email: '', contactNumber: '', shippingAddress: '', productName: '', quantity: 1, productImage: null, });

const handleChange = e => {
  const { name, value, files } = e.target; setFormData({ ...formData, [name]: files ? files[0] : value });
};

const handleSubmit = async e => { 
  e.preventDefault(); const form = new FormData(); Object.entries(formData).forEach(([key, val]) => form.append(key, val)); await axios.post('http://localhost:5000/api/orders', form); alert('Order submitted!'); 
};

return (
  <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white rounded shadow"> 
    <input name="customerName" placeholder="Name" required onChange={handleChange} className="border p-2 w-full mb-2" /> 
    <input name="email" type="email" placeholder="Email" required onChange={handleChange} className="border p-2 w-full mb-2" /> 
    <input name="contactNumber" placeholder="Contact Number" required onChange={handleChange} className="border p-2 w-full mb-2" /> 
    <textarea name="shippingAddress" placeholder="Address" required onChange={handleChange} className="border p-2 w-full mb-2" /> 
    <input name="productName" placeholder="Product Name" required onChange={handleChange} className="border p-2 w-full mb-2" /> 
    <input name="quantity" type="number" min="1" max="100" required onChange={handleChange} className="border p-2 w-full mb-2" /> 
    <input type="file" name="productImage" accept="image/*" onChange={handleChange} className="mb-2" /> 
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Place Order</button>
  </form> 
); 
}
