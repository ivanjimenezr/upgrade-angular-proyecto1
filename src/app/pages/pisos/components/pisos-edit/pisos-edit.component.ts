import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { ServiceService } from './../../services/service.service';
import { ActivatedRoute , Router} from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Ipiso } from './../../models/ipiso';
// import { timeStamp } from 'console';

@Component({
  selector: 'app-pisos-edit',
  templateUrl: './pisos-edit.component.html',
  styleUrls: ['./pisos-edit.component.scss']
})
export class PisosEditComponent implements OnInit {

  @Input() set piso (valor:any){
    this.crearFormulario();
    if (valor){
      this.pisoOriginal = valor;
      this.formActualizar.patchValue({
        _id: valor._id,
        titular: valor.titular,
        precio:valor.precio,
        tipo:valor.tipo,
        direccion:valor.direccion,
        superficie:valor.superficie,
        imagen:valor.imagen

      });
    }
  }

  @Output() cerrar = new EventEmitter();
  public formActualizar!: FormGroup;
  public pisoOriginal: any;
  public pisosId? : any 
  // variable submitted a false
	public submitted: boolean = false;
  protected readonly clearSubscriptions$ = new Subject();
  constructor(private formBuilder: FormBuilder, private serviceService:ServiceService, private authService: AuthService,private activatedRoute: ActivatedRoute, private router:Router) {
    // this.formActualizar = this.formBuilder.group({
    //   titular: ['', [Validators.required]],
    //   precio: ['', [Validators.required, Validators.maxLength(8)]],
    //   tipo: ['', [Validators.required, Validators.maxLength(10)]],
    //   direccion: ['', [Validators.required]],
    //   superficie: ['', [Validators.required, Validators.maxLength(7)]],
    //   imagen: ['', [Validators.required]],
    // });
  }

  ngOnInit(): void {
    this.crearFormulario();
    this.activatedRoute.paramMap.subscribe(params => {
      this.pisosId = params.get('id')
      // console.log(this.pisosId)
    })
    this.recoverPisos(this.pisosId)
  }

  recoverPisos(idPiso: any) {
    return this.serviceService.getPisoId(idPiso).pipe(takeUntil(this.clearSubscriptions$),).subscribe((data)=> {
      this.pisosId = data.data.pisos
      console.log(this.pisosId)
    })
  }

  crearFormulario(){
    this.formActualizar = this.formBuilder.group({
      titular:['', [Validators.required]],
      precio:['', [Validators.required]],
      tipo:['', [Validators.required]],
      direccion:['', [Validators.required]],
      superficie:['', [Validators.required]],
      imagen:['', [Validators.required]],

    })
  }
  public onGuardar(): void {
    console.log(this.formActualizar.value, this.pisosId._id)

    this.authService.updatePiso(this.formActualizar.value, this.pisosId._id).subscribe((res) => {
      if (res) {
    
        // El usuario ha pulsado en submit->cambia a true submitted
        this.submitted = true;
        // Si el formulario es valido
        if (this.formActualizar.valid) {
          // Creamos un Usuario y lo emitimos
          const piso: any = {
            titular: this.formActualizar.get('titular')?.value,
            precio: this.formActualizar.get('precio')?.value,
            tipo: this.formActualizar.get('tipo')?.value,
            direccion: this.formActualizar.get('direccion')?.value,
            superficie: this.formActualizar.get('superficie')?.value,
            imagen: this.formActualizar.get('imagen')?.value,
          };
          console.log(piso);
          this.formActualizar.reset()
          this.router.navigate([`pisos/`]);
          this.submitted = false;

        }
      }
    })
  }
  onCancelar(){
    this.pisoOriginal = null;
    this.cerrar.emit();
  }

  
  

}
