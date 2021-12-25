import { ProfileService } from './services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, map } from 'rxjs';
import {AuthService} from '../../../../core/services/auth.service'
// import { parse } from 'path';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public userId: String = '';
  public sub!: Subscription;
  public user:any = '';
  public usuarios: any = ''
  
  constructor(private  activatedRoute:ActivatedRoute, private profileService:ProfileService) { }

  public ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params =>{
      this.userId = params['id'];
      
      this.profileService.getPisoId(this.userId).pipe(
        map((user:any)=> this.user = user) 
        
      ).subscribe()
      
    })
    
  }

  public ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
