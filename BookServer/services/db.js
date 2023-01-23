// import mongoose

const mongoose = require('mongoose')


// define connection string

mongoose.connect('mongodb://localhost:27017/library',()=>{
    console.log("connected to mongoDB")
})

// create model to store all products 

const Books = mongoose.model('Book',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
    download:String,
    read:String
})

const Featured = mongoose.model('Featuredbook',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
    download:String,
    read:String
})


const Popular = mongoose.model('Popularbook',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
    download:String,
    read:String
})

    /*WISHLIST*/
//create model to add wishlist books
//create a collection in mongodb
//create a model
const Wishlist=mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
    download:String,
    read:String
})

     /*CART*/
//create model to add cart books
const Cart=mongoose.model('Cart',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
    download:String,
    read:String
})


     /*LIBRARY*/
//create model library books
const Library=mongoose.model('Library',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
    download:String,
    read:String
})





module.exports = {
    Books,
    Wishlist,
    Cart,
    Library,
    Featured,
    Popular

}