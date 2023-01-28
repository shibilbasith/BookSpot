import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  domain = environment.domain;
  
  searchkey = new BehaviorSubject('')
  //to share stream of data

  constructor(private http:HttpClient) { 
  }

  getAllBooks(){
    return this.http.get(`${this.domain}/all-books`)  //books json data
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

    return this.http.post(`${this.domain}/addtowishlist`, body)
  }

  //get wishlist details
  getwishlist(){
    return this.http.get(`${this.domain}/getwishlist`)  //books json data
  }

  //delete wishlist
  deletewish(id:any){
    return this.http.delete(`${this.domain}/deletewish/`+id)
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
    return this.http.post(`${this.domain}/addtocart`, body)
  }

  //get cart details
  getcart(){
    return this.http.get(`${this.domain}/getcart`)  //books json data
  }

  //delete wishlist
  deletecart(id:any){
    return this.http.delete(`${this.domain}/deletecart/`+id)
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
    return this.http.post(`${this.domain}/addtolibrary`, body)
  }


  //get library details
  getlibrary(){
    return this.http.get(`${this.domain}/getlibrary`)  //books json data
  }


  //get all featured books

  getFeatured(){
    return this.http.get(`${this.domain}/featured-books`)  //books json data
  }


  //get all popular books

  getPopular(){
    return this.http.get(`${this.domain}/popular-books`)  //books json data
  }



}
