import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../services/service.service';
import { Ipiso } from './../../models/ipiso';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pisos-detail',
  templateUrl: './pisos-detail.component.html',
  styleUrls: ['./pisos-detail.component.scss']
})
export class PisosDetailComponent implements OnInit {

  public pisosId? : any 

  protected readonly clearSubscriptions$ = new Subject();
  constructor(private serviceService : ServiceService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.pisosId = params.get('id')
      // console.log(this.pisosId)
    })
    this.recoverPisos(this.pisosId)
  }

  public ngOnDestroy() {
    this.clearSubscriptions$.complete();
  }

  recoverPisos(idPiso: any) {
    return this.serviceService.getPisoId(idPiso).pipe(takeUntil(this.clearSubscriptions$),).subscribe((data)=> {
      this.pisosId = data.data.pisos
      console.log(this.pisosId)
    })
  }
}
