import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router'
import { Register } from '../register';
import { UserService } from '../user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  constructor(private formBuilder:FormBuilder, private service:UserService, private router:Router) { }
  registerForm: FormGroup;
  userData:Register= new Register();
  submitted:boolean=false;
  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  get f(){
    return this.registerForm.controls;
  }
  onSubmit(){
      this.submitted=true;

      if(this.registerForm.invalid)
        return;
      else {
          console.log("first Name " + this.userData.firstName)
          console.log("Last Name " + this.userData.lastName)
          console.log("Email " + this.userData.email)
          console.log("Password " + this.userData.password)
          this.service.setData(this.userData);
          this.router.navigateByUrl('/dashboard');
        }  
  }
  
}
