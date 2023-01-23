import { Component, OnInit } from '@angular/core';
import { ApiService } from '../books/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart: any=[]
  emsg:string=''



  constructor(private api:ApiService) { }
  

  ngOnInit(): void {
    
   this.api.getcart().subscribe(
      (data:any)=>{
        this.cart=data.Books.length
      }) 
   
  
    
  }

  search(event:any){
    let searchkey=event.target.value
    this.api.searchkey.next(searchkey)
  } 

}
