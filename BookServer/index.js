//server creation

//1 import express
const express = require('express');

//import cors

const cors = require('cors');

//2 using express create an app

const app = express();

//3 set up port number

app.listen(3000,()=>{
    console.log('Express server listening on port 3000');
})

//4 Use json parser for server application
app.use(express.json());

//using cors specify origin to the server
app.use(cors({
    origin:'http://localhost:4200'
}))

const dataService = require('./services/dataService')

//Api to get all books
app.get('/all-books',(req,res)=>{
    dataService.getAllBooks().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

       /**** WISHLIST ****/

//Api to addtowishlist

app.post('/addtowishlist',(req,res)=>{
    console.log(req.body)
    dataService.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.description,req.body.image,req.body.download,req.body.read).then((result)=>{
            res.status(result.statusCode).json(result)
        })
})

//Api for getting wishlist book

app.get('/getwishlist',(req,res)=>{
    dataService.getwishlist().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//request for delete wishlist book

app.delete('/deletewish/:id',(req,res)=>{
    dataService.deleteitem(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

        /**** CART ****/

//Api to addtocart

app.post('/addtocart',(req,res)=>{
    console.log(req.body)
    dataService.addtocart(req.body.id,req.body.title,req.body.price,req.body.description,req.body.image,req.body.download,req.body.read).then((result)=>{
            res.status(result.statusCode).json(result)
        })
})

//Api for getting cart book

app.get('/getcart',(req,res)=>{
    dataService.getcart().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//request for delete delete book

app.delete('/deletecart/:id',(req,res)=>{
    dataService.deletecart(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})


        /**** LIBRARY ****/

//Api to addtolibrary

app.post('/addtolibrary',(req,res)=>{
    dataService.addtolibrary(req.body.id,req.body.title,req.body.price,req.body.description,req.body.image,req.body.download,req.body.read).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        })
})

//Api for getting library book in index.js

app.get('/getlibrary',(req,res)=>{
    dataService.getlibrary().then(result=>{
        res.status(result.statusCode).json(result)
    })
})



//Api to get featured books
app.get('/featured-books',(req,res)=>{
    dataService.getFeatured().then(result=>{
        res.status(result.statusCode).json(result)
    })
})


//Api to get popular books
app.get('/popular-books',(req,res)=>{
    dataService.getPopular().then(result=>{
        res.status(result.statusCode).json(result)
    })
})