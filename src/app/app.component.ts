import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive_form';
  myForm:any=[];
constructor(private fbuilder:FormBuilder){
this.myForm=this.fbuilder.group({
'name':['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
'email':['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
'pass1':['',[Validators.required]],
'cpass2':['',[Validators.required]]
});
}
public get name(){
  return this.myForm.get('name') as FormControl;
}
public get email(){
  return this.myForm.get('email') as FormControl;
}
public get pass1(){
  return this.myForm.get('pass1') as FormControl;
}
public get cpass2(){
  return this.myForm.get('cpass2') as FormControl;
}

submit(){
  console.log(this.myForm.value);
}
}
