import { ServiceService } from './../../services/service.service';
import { Ipiso } from './../../models/ipiso';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pisos-component',
  templateUrl: './pisos-component.component.html',
  styleUrls: ['./pisos-component.component.scss']
})
export class PisosComponentComponent implements OnInit {

  //Aquí almacenaremos nuestro listado de pisos una vez se complete la petición
  public pisosList : Ipiso[] = []
  public indexPiso: number | null = null;
  public isOpen: boolean = false;

  protected readonly clearSubscriptions$ = new Subject();

  constructor(public serviceService : ServiceService) { 
    
  }

  

  ngOnInit(): void {
    this.recoverPisos(); 

		//La función de recuperar los pisos se ejecutará una vez se inicie el componente.
  }
  public ngOnDestroy() {
    this.clearSubscriptions$.complete();
  }
  recoverPisos() {
    return this.serviceService.getPiso().pipe(takeUntil(this.clearSubscriptions$),).subscribe((data)=> {
      this.pisosList = data.data.pisos
      console.log(this.pisosList)
    })
  }
  openPiso(index: number) {
    this.indexPiso !== null ? this.indexPiso =  null : this.indexPiso = index;  
  }

}
