import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string = "";
  age:number = 0;

  get NameValid(){
    return this.name!="" && this.name.length>=3;
  }

  get AgeValid(){
    return this.age>18 && this.age<50;
  }

  personData:{name:string, age:number}[]=[];

  AddData(){
    let person:{name:string, age:number} = {name:this.name, age:this.age};

    if(this.AgeValid && this.NameValid)
      this.personData.push(person);
  }


}
