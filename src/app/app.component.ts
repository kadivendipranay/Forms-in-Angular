import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/registration';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  registration:Registration=new Registration();

  onSubmit():void{
    console.log(this.registration.name)
    console.log(this.registration.city)
    console.log(this.registration.email)
    console.log(this.registration.mobile)
  }

}
