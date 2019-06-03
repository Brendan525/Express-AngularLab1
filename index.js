const express = require('express'); 
const app = express();
const port = 3000;
const cartItems = require('./routes/cart-items');
// const app = express.Router();


app.use('/cart-items', cartItems)
app.listen(port, () => console.log(`app is listening on ${port}`))









// const express = require('express'); 
// const app = express();
// const port = 3000;
// // const cartItem = require('./route/cart-items');
// app.use('/', cartItems)
// // const cors = require('cors');
// const app = express.Router();
// // const app = require("./app-routes");


// // app.get('/', (req, res) => {
// //  res.send('Hello World');
// // });

// // app.get('/cart-items', (req, res) => {
// //  res.send(list);
// // });

// // app.post('/cart-items/:id', (req,res) => {
// //  console.log(req.body);
// // });

// // app.put('cart-items/:id', (req,res) => { 
// //  console.log(req.params.body);
// // });

// // app.delete('/cart-items/:id', (req,res) => {
// //     console.log(req.params);
// //    });

// // router.get('/cart-items', (req, res) => {
// // 	//Code to get items from database
// // 	res.send(req.items)
// // }) 

// // app.get('/api/posts/:year/:month', (req,res) => {
// //     res.send(req.params); //http://localhost:3000/api/posts/2019/6
// //    });


// // app.use(cors());
// app.use(express.json());
// // // PORT
// // const port = process.env.Port || 3000;
// app.listen(3000, () => console.log('Listening on port 3000...'));
// // app.listen(port, () => console.log(`app is listening on ${port} `);