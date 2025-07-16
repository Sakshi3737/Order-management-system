import express from 'express'; 
import multer from 'multer'; 
import { 
  createOrder, getOrders, getOrderById, updateQuantity, deleteOrder 
} from '../controllers/orderController.js'; 
import protect from '../middleware/auth.js';

const router = express.Router(); 
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('productImage'), createOrder); 
router.get('/', protect, getOrders); 
router.get('/:id', protect, getOrderById);
router.put('/:id', protect, updateQuantity); 
router.delete('/:id', protect, deleteOrder);

export default router;
