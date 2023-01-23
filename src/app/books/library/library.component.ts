import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  
library:any=[]
emsg:string=''

constructor(private api:ApiService) { }

ngOnInit(): void {
  this.api.getlibrary().subscribe(
    (data:any)=>{
      this.library=data.Books
    },
    //client error
    (data:any)=>{
      this.emsg=data.error.message
    },
  )
}

}
