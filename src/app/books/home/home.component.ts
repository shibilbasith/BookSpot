import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredbooks:any=[];
  popularbooks:any=[];

  constructor(private api:ApiService, private snackBar: MatSnackBar) { }

  //get all data from database

  ngOnInit(): void {
    this.api.getFeatured().subscribe(
      (data:any)=>{
        this.featuredbooks=data.Books
      }
    )
    this.api.getPopular().subscribe(
      (data:any)=>{
        this.popularbooks=data.Books
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
