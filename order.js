import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customerName: String, 
  email: String, 
  contactNumber: String, 
  shippingAddress: String,
  productName: String, 
  quantity: Number, 
  productImage: String, 
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
