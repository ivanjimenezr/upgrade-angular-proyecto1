import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { Ipta } from './models/ipta';

@Component({
  selector: 'app-pta-form',
  templateUrl: './pta-form.component.html',
  styleUrls: ['./pta-form.component.scss']
})
export class PtaFormComponent implements OnInit {

  public ptaUploadForm: FormGroup;
	// variable submitted a false
	public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, public authService: AuthService,public router: Router) {
    this.ptaUploadForm = this.formBuilder.group({
      titular: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.maxLength(8)]],
      tipo: ['', [Validators.required, Validators.maxLength(10)]],
      direccion: ['', [Validators.required]],
      superficie: ['', [Validators.required, Validators.maxLength(7)]],
      imagen: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.authService.pisoUp(this.ptaUploadForm.value).subscribe((res) => {
      if (res.result) {
    
        // El usuario ha pulsado en submit->cambia a true submitted
        this.submitted = true;
        // Si el formulario es valido
        if (this.ptaUploadForm.valid) {
          // Creamos un Usuario y lo emitimos
          const piso: Ipta = {
            titular: this.ptaUploadForm.get('titular')?.value,
            precio: this.ptaUploadForm.get('precio')?.value,
            tipo: this.ptaUploadForm.get('tipo')?.value,
            direccion: this.ptaUploadForm.get('direccion')?.value,
            superficie: this.ptaUploadForm.get('superficie')?.value,
            imagen: this.ptaUploadForm.get('imagen')?.value,
          };
          console.log(piso);
          this.ptaUploadForm.reset()
          this.router.navigate(['pisos']);
          this.submitted = false;

        }
      }
    })
  }

}