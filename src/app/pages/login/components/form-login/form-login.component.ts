import { Component, OnInit } from '@angular/core';
import { ILoginForm } from './models/IformLogin';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  public userLoginForm! : FormGroup ;

  public submitted : boolean = false;

  constructor(private formBuilder: FormBuilder, public authService: AuthService, public router: Router) {
    this.buildForm();
  }

  ngOnInit(): void {
  }


  


  public buildForm() {
    this.userLoginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
  public loginUser() {
    this.authService.signIn(this.userLoginForm.value)
  }


  // public onSubmit (): void {
  //   this.submitted = true;
  //   if (this.userLoginForm.valid){
  //     const user: ILoginForm = {
  //       email: this.userLoginForm.get('email')?.value,
  //       password: this.userLoginForm.get('password')?.value
  //     };
  //     console.log(user);
  //     this.userLoginForm.reset();
  //     this.submitted = false;
  //   }
    
  // }

}
