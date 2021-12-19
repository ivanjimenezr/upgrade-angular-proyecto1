import { Component, OnInit } from '@angular/core';
import { ILoginForm } from './models/IformLogin';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  public userLoginForm : FormGroup ;

  public submitted : boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.userLoginForm = this.formBuilder.group ({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.maxLength(10)]]
    })
  }

  ngOnInit(): void {
  }

  public onSubmit (): void {
    this.submitted = true;
    if (this.userLoginForm.valid){
      const user: ILoginForm = {
        email: this.userLoginForm.get('email')?.value,
        password: this.userLoginForm.get('password')?.value
      };
      console.log(user);
      this.userLoginForm.reset();
      this.submitted = false;
    }
    
  }
}
