import { Component, OnInit } from '@angular/core';
import { IRegisterForm  } from './models/Iregister-form';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { comparePassword } from './customValidator';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  // Incialización del formulario
  public userRegisterForm : FormGroup 

  // variable submitted a false
	public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,public authService: AuthService,public router: Router) {

    this.userRegisterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.maxLength(10)]],
      passwordRepeat: ['',]
    },
    
      {
        // Validación custom de password
      validator: comparePassword ('password', 'passwordRepeat')
      }
    )
  }

  ngOnInit(): void {
  }

  // public onSubmit(): void {
  //   // El usuario ha pulsado en submit->cambia a true submitted
  //   this.submitted = true;
  //   // Si el formulario es valido
  //   if (this.userRegisterForm.valid){
  //     // Creamos un Usuario y lo emitimos
  //     const user: IRegisterForm = {
  //       name: this.userRegisterForm.get('name')?.value,
  //       email: this.userRegisterForm.get('email')?.value,
  //       password: this.userRegisterForm.get('password')?.value,
  //       passwordRepeat: this.userRegisterForm.get('passwordRepeat')?.value,
  //     };

  //     console.log(user);

      
  //     // Reseteamos todos los campos y el indicador de envío o submitted
  //     // this.userRegisterForm.reset();
  //     // this.submitted = false;
  //   }


  // }
  onSubmit() {
    this.authService.signUp(this.userRegisterForm.value).subscribe((res) => {
      if (res.result) {
        this.submitted = true;
        if (this.userRegisterForm.valid){
          // Creamos un Usuario y lo emitimos
          const user: IRegisterForm = {
            name: this.userRegisterForm.get('name')?.value,
            email: this.userRegisterForm.get('email')?.value,
            password: this.userRegisterForm.get('password')?.value,
            passwordRepeat: this.userRegisterForm.get('passwordRepeat')?.value,
          };
    
          console.log(user);
          this.userRegisterForm.reset()
          this.router.navigate(['login']);
          this.submitted = false;
        }
      }
    })
  }

}
