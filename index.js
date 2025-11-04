const express = require("express")
const app = express()

const { initializeDatabase } = require("./db/db.connect");
//const fs = require("fs");

// Models
const Product = require("./models/Product");
const Category = require("./models/Category");
const User = require("./models/User");
const Order = require("./models/Order");
const Cart = require("./models/Cart");
const Wishlist = require("./models/Wishlist");

app.use(express.json())

// Connect to Database
initializeDatabase();

//products 

async function readProductById(productId) {
    try{
        const product = await Product.findById( productId )
        return(product)

    } catch(error){
        throw error

    }
    
}

app.get("/product/:productId" , async(req , res) => {
    try{
        const product = await readProductById(req.params.productId)
        if(product){
            res.json(product)
        }else{
            res.status(404).json({error: "product is not found"})
        }

    } catch(error){
        res.status(500).json({error: "failed to fetch product"})
    }
})

async function readAllProducts(){
    try{
        const allProducts = await Product.find()
        return(allProducts)

    } catch(error){
        throw error

    }
}

app.get("/products" , async (req , res) => {
    try{
        const products = await readAllProducts()
        if(products.length != 0 ){
            res.json(products)
        } else {
            res.status(404).json({error: "not found products"})
        }

    } catch(error){
        res.status(500).json({error: "failed to fetch products"})
    }
})

//categories api 
async function readAllProductsCategories(){
    try{
        const allProductsCategories = await Category.find()
        return(allProductsCategories)

    } catch(error){
        throw error

    }
}

app.get("/categories" , async (req , res) => {
    try{
        const productsCategories = await readAllProductsCategories()
        if(productsCategories.length != 0 ){
            res.json(productsCategories)
        } else {
            res.status(404).json({error: "not found products categories"})
        }

    } catch(error){
        res.status(500).json({error: "failed to fetch products categories"})
    }
})

async function readProductCategoriesById(productCategoriesId) {
    try{
        const productCategories = await Category.findById( productCategoriesId )
        return(productCategories)

    } catch(error){
        throw error

    }
    
}

app.get("/categories/:categoryId" , async(req , res) => {
    try{
        const categories = await readProductCategoriesById(req.params.categoryId)
        if( categories){
            res.json( categories)
        }else{
            res.status(404).json({error: "product is not found"})
        }

    } catch(error){
        res.status(500).json({error: "failed to fetch product"})
    }
})

//wishlist api
async function readAllWishlist(){
    try{
        const allWishlist = await Wishlist.find()
        return(allWishlist)
    } catch(error){
        throw error
    }
}

app.get("/wishlist" , async (req , res) => {
    try{
        const wishlist = await readAllWishlist()
        if(wishlist.length != 0 ){
            res.json(wishlist)
        } else {
            res.status(404).json({error: "not found wishlist"})
        }

    } catch(error){
        res.status(500).json({error: "failed to fetch wishlist"})
    }
})

async function readWishlistById(wishlistId) {
    try{
        const wishlist = await Wishlist.findById(wishlistId)
        return(wishlist)
    } catch(error){
        throw error
    }
}

app.get("/wishlist/:wishlistId" , async(req , res) => {
    try{
        const wishlist = await readWishlistById(req.params.wishlistId)
        if(wishlist){
            res.json(wishlist)
        }else{
            res.status(404).json({error: "wishlist is not found"})
        }

    } catch(error){
        res.status(500).json({error: "failed to fetch wishlist"})
    }
})


//cart api
async function readAllCarts(){
    try{
        const allCarts = await Cart.find()
        return(allCarts)
    } catch(error){
        throw error
    }
}

app.get("/carts" , async (req , res) => {
    try{
        const carts = await readAllCarts()
        if(carts.length != 0 ){
            res.json(carts)
        } else {
            res.status(404).json({error: "not found carts"})
        }

    } catch(error){
        res.status(500).json({error: "failed to fetch carts"})
    }
})

async function readCartById(cartId) {
    try{
        const cart = await Cart.findById(cartId)
        return(cart)
    } catch(error){
        throw error
    }
}

app.get("/carts/:cartId" , async(req , res) => {
    try{
        const cart = await readCartById(req.params.cartId)
        if(cart){
            res.json(cart)
        }else{
            res.status(404).json({error: "cart is not found"})
        }

    } catch(error){
        res.status(500).json({error: "failed to fetch cart"})
    }
})




//address api
async function readAllAddresses(){
    try{
        const allAddresses = await User.find().select("addresses name")
        return(allAddresses)
    } catch(error){
        throw error
    }
}

// app.get("/address" , async (req , res) => {
//     try{
//         const addresses = await readAllAddresses()
//         if(addresses.length != 0 ){
//             res.json(addresses)
//         } else {
//             res.status(404).json({error: "not found addresses"})
//         }

//     } catch(error){
//         res.status(500).json({error: "failed to fetch addresses"})
//     }
// })

// async function readAddressById(addressId) {
//     try{
//         const user = await User.findOne({ "addresses._id": addressId }, { "addresses.$": 1 })
//         return(user ? user.addresses[0] : null)
//     } catch(error){
//         throw error
//     }
// }

// app.get("/address/:addressId" , async(req , res) => {
//     try{
//         const address = await readAddressById(req.params.addressId)
//         if(address){
//             res.json(address)
//         }else{
//             res.status(404).json({error: "address is not found"})
//         }

//     } catch(error){
//         res.status(500).json({error: "failed to fetch address"})
//     }
// })

// async function readAddressByName(userName) {
//     try{
//         const user = await User.findOne({ name: userName }).select("addresses name")
//         return(user)
//     } catch(error){
//         throw error
//     }
// }

// app.get("/address/name/:userName" , async(req , res) => {
//     try{
//         const user = await readAddressByName(req.params.userName)
//         if(user){
//             res.json(user)
//         }else{
//             res.status(404).json({error: "user is not found"})
//         }

//     } catch(error){
//         res.status(500).json({error: "failed to fetch address"})
//     }
// })


//orders api
async function readAllOrders(){
    try{
        const allOrders = await Order.find()
        return(allOrders)
    } catch(error){
        throw error
    }
}

app.get("/orders" , async (req , res) => {
    try{
        const orders = await readAllOrders()
        if(orders.length != 0 ){
            res.json(orders)
        } else {
            res.status(404).json({error: "not found orders"})
        }

    } catch(error){
        res.status(500).json({error: "failed to fetch orders"})
    }
})

async function readOrderById(orderId) {
    try{
        const order = await Order.findById(orderId)
        return(order)
    } catch(error){
        throw error
    }
}

app.get("/orders/:orderId" , async(req , res) => {
    try{
        const order = await readOrderById(req.params.orderId)
        if(order){
            res.json(order)
        }else{
            res.status(404).json({error: "order is not found"})
        }

    } catch(error){
        res.status(500).json({error: "failed to fetch order"})
    }
})


const PORT = 3000
app.listen(PORT , () => {
    console.log(`server is running on ${PORT}`)
})


// 1️⃣ Read JSON Files
// const jsonDataProducts = fs.readFileSync("./data/products.json", "utf-8");
// const productsData = JSON.parse(jsonDataProducts);

// const jsonDataCategories = fs.readFileSync("./data/categories.json", "utf-8");
// const categoriesData = JSON.parse(jsonDataCategories);

// const jsonDataUsers = fs.readFileSync("./data/users.json", "utf-8");
// const usersData = JSON.parse(jsonDataUsers);

// const jsonDataOrders = fs.readFileSync("./data/orders.json", "utf-8");
// const ordersData = JSON.parse(jsonDataOrders);

// const jsonDataCarts = fs.readFileSync("./data/carts.json", "utf-8");
// const cartsData = JSON.parse(jsonDataCarts);

// const jsonDataWishlist = fs.readFileSync("./data/wishlist.json", "utf-8");
// const wishlistData = JSON.parse(jsonDataWishlist);

// 2️⃣ Seeding Functions
// function seedDataProducts() {
//   try {
//     for (const productData of productsData) {
//       const newProduct = new Product({
//         name: productData.name,
//         image: productData.image,
//         category: productData.category,
//         price: productData.price,
//         originalPrice: productData.originalPrice,
//         discount: productData.discount,
//         rating: productData.rating,
//         description: productData.description,
//         size: productData.size,
//         stock: productData.stock,
//       });
//       newProduct.save();
//     }
//     console.log("✅ Products seeded successfully!");
//   } catch (error) {
//     console.error("❌ Error seeding products:", error);
//   }
// }

// function seedDataCategories() {
//   try {
//     for (const categoryData of categoriesData) {
//       const newCategory = new Category({
//         name: categoryData.name,
//         image: categoryData.image,
//       });
//       newCategory.save();
//     }
//     console.log("✅ Categories seeded successfully!");
//   } catch (error) {
//     console.error("❌ Error seeding categories:", error);
//   }
// }

// function seedDataUsers() {
//   try {
//     for (const userData of usersData) {
//       const newUser = new User({
//         name: userData.name,
//         email: userData.email,
//         password: userData.password,
//         address: userData.address,
//       });
//       newUser.save();
//     }
//     console.log("✅ Users seeded successfully!");
//   } catch (error) {
//     console.error("❌ Error seeding users:", error);
//   }
// }

// function seedDataOrders() {
//   try {
//     for (const orderData of ordersData) {
//       const newOrder = new Order({
//         userId: orderData.userId,
//         items: orderData.items,
//         totalAmount: orderData.totalAmount,
//         address: orderData.address,
//         status: orderData.status,
//         createdAt: orderData.createdAt,
//       });
//       newOrder.save();
//     }
//     console.log("✅ Orders seeded successfully!");
//   } catch (error) {
//     console.error("❌ Error seeding orders:", error);
//   }
// }

// function seedDataCarts() {
//   try {
//     for (const cartData of cartsData) {
//       const newCart = new Cart({
//         userId: cartData.userId,
//         items: cartData.items,
//         totalPrice: cartData.totalPrice,
//       });
//       newCart.save();
//     }
//     console.log("✅ Carts seeded successfully!");
//   } catch (error) {
//     console.error("❌ Error seeding carts:", error);
//   }
// }

// function seedDataWishlist() {
//   try {
//     for (const wishData of wishlistData) {
//       const newWishlist = new Wishlist({
//         userId: wishData.userId,
//         products: wishData.products,
//       });
//       newWishlist.save();
//     }
//     console.log("✅ Wishlist seeded successfully!");
//   } catch (error) {
//     console.error("❌ Error seeding wishlist:", error);
//   }
// }

// // 3️⃣ Run All Seeds
// seedDataProducts();
// seedDataCategories();
// seedDataUsers();
// seedDataOrders();
// seedDataCarts();
// seedDataWishlist();
