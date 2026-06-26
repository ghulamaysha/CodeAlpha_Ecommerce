const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
  { name: "Gold glasses ", description: "Elegant white off-shoulder dress perfect for summer occasions", price: 2999, image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Clothing", stock: 10 },
  { name: "Brown Leather Handbag", description: "Stylish brown leather handbag with gold chain strap", price: 1499, image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Bags", stock: 8 },
  { name: "Fashion bangles", description: "Trendy drop earrings for everyday and party wear", price: 899, image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Jewelry", stock: 20 },
  { name: "Classic White Sneakers", description: "Clean white sneakers perfect for casual everyday wear", price: 2499, image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Shoes", stock: 15 },
  { name: "Black Sunglasses", description: "Classic black frame sunglasses with UV protection", price: 799, image: "https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Accessories", stock: 30 },
  { name: "Silver Watch", description: "Elegant silver watch with round dial and metal strap", price: 3499, image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Watches", stock: 6 },
  { name: "Gold Pearl Necklace", description: "Delicate gold necklace with beautiful pearl pendant", price: 1199, image: "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Jewelry", stock: 18 },
  { name: "Makeup Brush Collection", description: "Complete professional makeup brush set with holder", price: 1599, image: "https://images.pexels.com/photos/2253834/pexels-photo-2253834.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Beauty", stock: 22 },
  { name: "Luxury Perfume Bottle", description: "Premium luxury perfume with long lasting floral scent", price: 2799, image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Beauty", stock: 16 },
  { name: "Black Leather Crossbody", description: "Compact black leather crossbody bag with adjustable strap", price: 1799, image: "https://images.pexels.com/photos/1204459/pexels-photo-1204459.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Bags", stock: 10 },
  { name: "casually styled earings", description: "Set of elegant gold chain bangles for festive occasions", price: 699, image: "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Jewelry", stock: 35 },
  { name: "High Heel Sandals", description: "Strappy high heel sandals perfect for parties and events", price: 1999, image: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Shoes", stock: 12 },
  { name: "Skin Glow Serum", description: "Brightening vitamin C serum for glowing healthy skin", price: 1299, image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Beauty", stock: 28 },
  { name: "Red Evening Dress", description: "Stunning red evening gown perfect for formal events", price: 3999, image: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Clothing", stock: 8 },
  { name: "Floral Summer Top", description: "Light and breezy floral top perfect for summer days", price: 999, image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Clothing", stock: 20 },
  //{ name: "Pink Clutch Bag", description: "Elegant pink clutch bag for evening and formal events", price: 1099, image: "https://images.pexels.com/photos/1566150905458-1bf1fc113f0d/pexels-photo.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Bags", stock: 15 },
  { name: "Lipstick Collection", description: "Set of 6 long lasting matte lipsticks in beautiful shades", price: 1499, image: "https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Beauty", stock: 25 },
  { name: "Denim Blue Jeans", description: "Classic blue denim jacket for casual everyday styling", price: 2199, image: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Clothing", stock: 14 },
  { name: "Silk Pink Scarf", description: "Soft silk scarf in beautiful pink shade for all seasons", price: 599, image: "https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Accessories", stock: 25 },
  { name: "Brown Ankle Boots", description: "Stylish brown ankle boots with comfortable block heel", price: 2799, image: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Shoes", stock: 10 }
];
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected!');
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('20 Products add ho gaye! ✅');
    process.exit();
  })
  .catch(err => console.log(err));