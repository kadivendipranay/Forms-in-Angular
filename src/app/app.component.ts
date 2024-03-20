import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registration } from 'src/registration';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  myForm!: FormGroup;
  formClick:boolean=false;
  constructor(private fb:FormBuilder){
       this.myForm=this.fb.group(
        {
          'firstName':['',Validators.required],
          'email':['',Validators.required]
        }
       )
  }
onSubmit(){
this.formClick=true;
  console.log(this.myForm.value.firstName)
  console.log(this.myForm.value.email)
}
  
}


