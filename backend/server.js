import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// 1. Load environment configurations
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 2. Enable CORS with Frontend Origins
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type']
}));

// 3. Setup Body Parsing Middleware
app.use(express.json());

// 4. Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🍃 MongoDB Atlas cloud database connected successfully!'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// 5. Schema Definition
const EnquirySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true, trim: true },
  registeredAt: { type: Date, default: Date.now }
});

const Enquiry = mongoose.model('Enquiry', EnquirySchema);

// 6. Main Registration API Endpoint
app.post('/api/enquiry', async (req, res) => {
  const { name, email, phone } = req.body;

  // Structural validations
  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  if (name.trim().length < 2) {
    return res.status(400).json({ success: false, message: 'Please enter a valid full name.' });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email format.' });
  }

  const cleanPhone = phone.replace(/[\s-]/g, '');
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(cleanPhone)) {
    return res.status(400).json({ success: false, message: 'Phone number must be exactly 10 digits.' });
  }

  try {
    // Save to live database cluster collection
    const newEnquiry = new Enquiry({ name, email, phone: cleanPhone });
    await newEnquiry.save();

    return res.status(201).json({
      success: true,
      message: 'Registration data recorded securely inside MongoDB!'
    });
  } catch (error) {
    console.error('Database write operation error:', error);
    return res.status(500).json({ success: false, message: 'Internal server saving failure.' });
  }
});

// 7. Initialize Listener Engine
app.listen(PORT, () => {
  console.log(`🚀 Full-Stack Backend active on: http://localhost:${PORT}`);
});