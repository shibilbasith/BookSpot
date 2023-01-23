import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  wishlist:any
  emsg:string=''

  constructor(private api:ApiService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.api.getwishlist().subscribe(
      (data:any)=>{
        this.wishlist=data.Books
        if(this.wishlist.length==0){
          this.emsg='Empty wishlist'
        }
      },
      //client error
      (data:any)=>{
        this.emsg=data.error.message
      },
    )
  }

  //delete wishlist

  deletewish(book:any){
    this.api.deletewish(book.id).subscribe(
      (result:any)=>{
        // alert(result.message)
        window.location.reload()
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }

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
