import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  public myId = "tsteId";
  public name = "teste1";
  public successclass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public menssagemClassses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public titleStyle = {
    color: "orange",
    fontStyle: "italic"
  }

  public valor = "";
  constructor() { }

  ngOnInit() {
  }

  onTeste(valor){
 console.log(valor)
  }
  onClick(event){
    console.log(event)
  }

  @Input('parentData') public name1;
  @Output() public childEvent = new EventEmitter<string>();
  fireEvent(){
    this.childEvent.emit('Hey Codevolution');
  }

}
