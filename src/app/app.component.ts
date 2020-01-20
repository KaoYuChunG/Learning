import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "";
  setValue() {
    this.name = 'kkkk';
  }

  onSubmit(f: NgForm){
    console.log(f.value);
    console.log(f.valid);
  }

  public name1 = "Vishwas";
  public message = "";
}
