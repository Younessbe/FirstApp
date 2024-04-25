import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
public products : any;
public keword : string="";

  constructor() {
}
ngOnInit() {
  this.products = [
    {"id":1,"name":"Computer","price":4300},
    {"id":1,"name":"Printer","price":3255},
    {"id":1,"name":"Smartphone","price":2100},
    {"id":1,"name":"Mouse","price":11}
  ];
}

  deleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index,1);
  }

  Search() {
    console.log(this.keword);
    let result :any=[];
     for(let p of this.products){
      if(p.name.includes(this.keword)){
        result.push(p);
      }
    }
     this.products = result;
  }
}
