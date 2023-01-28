import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  searchkey = new BehaviorSubject('')
  //to share stream of data

  constructor(private http:HttpClient) { }
  getAllBooks(){
    return this.http.get('http://localhost:3000/all-books')  //books json data
  }




     //**WISHLIST**

  //addto wishlist
  addtowishlist(book:any){
    const body={
      id:book.id,
      title:book.title,
      price:book.price,
      description:book.description,
      image:book.image,
      download:book.download,
      read:book.read
    }

    return this.http.post('http://localhost:3000/addtowishlist', body)
  }

  //get wishlist details
  getwishlist(){
    return this.http.get('http://localhost:3000/getwishlist')  //books json data
  }

  //delete wishlist
  deletewish(id:any){
    return this.http.delete('http://localhost:3000/deletewish/'+id)
  }

      //**CART**//

  //addto cart
  addtocart(book:any){
    const body={
      id:book.id,
      title:book.title,
      price:book.price,
      description:book.description,
      image:book.image,
      download:book.download,
      read:book.read


    }
    return this.http.post('http://localhost:3000/addtocart', body)
  }

  //get cart details
  getcart(){
    return this.http.get('http://localhost:3000/getcart')  //books json data
  }

  //delete wishlist
  deletecart(id:any){
    return this.http.delete('http://localhost:3000/deletecart/'+id)
  }


        //** LIBRARY **//


  //Add to Library   
  addtolibrary(book:any){
    const body={
      id:book.id,
      title:book.title,
      price:book.price,
      description:book.description,
      image:book.image,
      download:book.download,
      read:book.read
    }
    return this.http.post('http://localhost:3000/addtolibrary', body)
  }


  //get library details
  getlibrary(){
    return this.http.get('http://localhost:3000/getlibrary')  //books json data
  }


  //get all featured books

  getFeatured(){
    return this.http.get('http://localhost:3000/featured-books')  //books json data
  }


  //get all popular books

  getPopular(){
    return this.http.get('http://localhost:3000/popular-books')  //books json data
  }



}
