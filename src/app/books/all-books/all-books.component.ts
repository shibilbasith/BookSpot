import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  searchterm: string='';

  allbooks:any=[]; //array data holding all products

  constructor(private api:ApiService, private snackBar: MatSnackBar) { }

  //get all data from database

  ngOnInit(): void {
    this.api.getAllBooks().subscribe(
      (data:any)=>{
        this.allbooks=data.Books
      }
    )
    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )
  }

     /**WISHLIST**/

  //add to wishlist
  addtowishlist(book:any){
    this.api.addtowishlist(book).subscribe(
      (result:any)=>{
        this.snackBar.open(result.message, 'Ok', { duration: 2000 });
        //alert(result.message) //product added successfully
      },
      (result:any)=>{
        this.snackBar.open(result.error.message, 'Ok', { duration: 2000 });
        //alert(result.error.message) //already exist
      }
    )
  }
  
    /**CART**/

  //add to cart
  addtocart(book:any){
    this.api.addtocart(book).subscribe(
      (result:any)=>{
        this.snackBar.open(result.message, 'Ok', { duration: 2000 });
        //alert(result.message) //product added successfully
      },
      (result:any)=>{
        this.snackBar.open(result.error.message, 'Ok', { duration: 2000 });
        //alert(result.error.message) //already exist
      }
    )
    
  }


}


