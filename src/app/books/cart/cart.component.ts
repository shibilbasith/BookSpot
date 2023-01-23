import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:any=[]
  emsg:string=''

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getcart().subscribe(
      (data:any)=>{
        this.cart=data.Books
        if(this.cart.length==0){
          this.emsg='Empty wishlist'
        }
      },
      //client error
      (data:any)=>{
        this.emsg=data.error.message
      },
    )
  }


  //Delete cart
  
  deletecart(book:any){
    this.api.deletecart(book.id).subscribe(
      (result:any)=>{
        // alert(result.message)
        window.location.reload()
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }

        /* PURCHASE */

        //add to library database
  purchase(book:any){
    this.api.addtolibrary(book).subscribe(
      (result:any)=>{
        // alert(result.message) //product added successfully
        this.router.navigate(['/books/checkout']);

      },
      (result:any)=>{
        alert(result.error.message) //already exist
        this.router.navigate(['/books/library']);

      }
    )

    this.api.deletecart(book.id).subscribe(
      (result:any)=>{
        // alert(result.message)
        window.location.reload()
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }


  
    
  


}
