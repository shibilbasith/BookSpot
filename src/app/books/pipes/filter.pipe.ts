import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allbooks:[],searchkey:string,propName:string): any[] {

    const result:any=[]
    if(!allbooks || searchkey==''|| propName==''){

    return allbooks;
    }

   allbooks.forEach((book:any)=>{
    if(book[propName].trim().toLowerCase().includes(searchkey.toLowerCase())){
      result.push(book);
    }
  })

  return result;
  }

}
