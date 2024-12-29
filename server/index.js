const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/database.js');


const app = express();

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, res) => {
    res.send(" hello from node api sandalu thushan ");
})

console.log("Hello from node");



//create schema and add new user schema

app.post('/api/signup', async (req, res) => {
    try {
      
      //  const Product = await Product.create(req.body);

      const { user_name, email, password } = req.body;

      const newuser = new User({ user_name, email,password });
      const saved = await newuser.save();



      res.status(200).json(saved);
    
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));