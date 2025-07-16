import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  try { 
    const order = new Order({ 
      ...req.body, productImage: req.file?.filename, }); 
    await order.save(); res.status(201).json(order); 
  } catch (err) { 
    res.status(500).json({ message: err.message }); 
  }
};

export const getOrders = async (req, res) => { 
  const orders = await Order.find().sort('-createdAt');
  res.json(orders); 
};

export const getOrderById = async (req, res) => { 
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ message: 'Order not found' });
  res.json(order); 
};

export const updateQuantity = async (req, res) => {
  const { quantity } = req.body; 
  const order = await Order.findByIdAndUpdate(req.params.id, { quantity }, { new: true }); 
  res.json(order); 
};

export const deleteOrder = async (req, res) => { 
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: 'Order deleted' });
};
