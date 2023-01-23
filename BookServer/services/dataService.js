// import db

const db = require('./db')

//get all products from the database

const getAllBooks=() =>{
    //to fetch all products from mongodb
    return db.Books.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    Books:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'Book not found'
                }
            }
        }
    )
}

                /****WISHLIST****/

//add wishlist

const addtowishlist=(id,title,price,description,image,download,read)=>{

    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
            return{
                status:false,
                statusCode:401,
                message:'Book already exist'
            }
            }
            else{
                const newBook = new db.Wishlist({
                    id,
                    title,
                    price,
                    description,
                    image,
                    download,
                    read
                })
                newBook.save()
                return{
                    status:true,
                    statusCode:200,
                    message:'Book added to Wishlist'
                }
            }
        }
    )
}

//get wishlist book

const getwishlist=() =>{
    //to fetch all products from mongodb
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    Books:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Your wishlist is Empty'
                }
            }
        }
    )
}

//delete wishlist item
const deleteitem=(id) =>{
    //to fetch all products from mongodb
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:'Book deleted successfully'
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Book not found'
                }
            }
        }
    )
}



         /****CART****/


//add cart

const addtocart=(id,title,price,description,image,download,read)=>{

    return db.Cart.findOne({id}).then(
        (result)=>{
            if(result){
            return{
                status:false,
                statusCode:401,
                message:'Book already exist'
            }
            }
            else{
                const newBook = new db.Cart({
                    id,
                    title,
                    price,
                    description,
                    image,
                    download,
                    read
                })
                newBook.save()
                return{
                    status:true,
                    statusCode:200,
                    message:'Book added to Cart'
                }
            }
        }
    )
}

//get cartlist book

const getcart=() =>{
    //to fetch all books from mongodb
    return db.Cart.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    Books:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Your Cart is Empty'
                }
            }
        }
    )
}

//delete cart item
const deletecart=(id) =>{
    //to fetch all books from mongodb
    return db.Cart.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:'Book deleted successfully'
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Book not found'
                }
            }
        }
    )
}


        /*LIBRARY*/

//add to library

const addtolibrary=(id,title,price,description,image,download,read)=>{

    return db.Library.findOne({id}).then(
        (result)=>{
            if(result){
            return{
                status:false,
                statusCode:401,
                message:'book already purchased'
            }
            }
            else{
					const newBook = new db.Library({
                        
                    id,
                    title,
                    price,
                    description,
                    image,
                    download,
                    read
                        
                })
                newBook.save()
                return{
                    status:true,
                    statusCode:200,
                    message:'book purchased successfully'
                }
            }
        }
    )
}


//get library book

const getlibrary=() =>{
    //to fetch all products from mongodb
    return db.Library.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    Books:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Your library is Empty'
                }
            }
        }
    )
}

//get all featured books

const getFeatured=() =>{
    //to fetch all products from mongodb
    return db.Featured.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    Books:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'Book not found'
                }
            }
        }
    )
}


//get all popular books

const getPopular=() =>{
    //to fetch all products from mongodb
    return db.Popular.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    Books:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'Book not found'
                }
            }
        }
    )
}


module.exports={
    getAllBooks,
    addtowishlist,
    getwishlist,
    deleteitem,

    addtocart,
    getcart,
    deletecart,

    addtolibrary,
    getlibrary,

    getFeatured,
    getPopular


}