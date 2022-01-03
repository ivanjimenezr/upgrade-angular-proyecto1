import { Component, OnInit } from '@angular/core';
import { ILogo, ILinks } from './models/Inavbar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public iLogo! : ILogo; 
  public about! : ILinks;
  public home! : ILinks;
  public pisos! : ILinks;
  public login! : ILinks;
  public register! : ILinks;
  public profile! : ILinks;
  public pta! : ILinks;

  public userId = sessionStorage.getItem('id');
  public userName = sessionStorage.getItem('name');

  // console.log(' to see the id in the console',data)

  constructor(public authService: AuthService) {
    
    this.iLogo = {
        img:'../../../../assets/avap_corto.png',
        href:'/',
        alt:'Agencia de la vivienda y la ayuda al particular'
    }
    this.home = {

      title:'Home',
      href:''
  },
  this.about = {

      title:'About',
      href:'about'
  },
  this.pisos = {

    title:'Pisos',
    href:'pisos'
},
this.login = {

  title:'Login',
  href:'login'
},
this.register = {

  title:'Register',
  href:'register'
},
this.pta = {

  title:'Pon tu anuncio',
  href:'pta'
},
this.profile = {

  title: `${this.userName}`,
  href:`profile/${this.userId}`
}



    
  }

  ngOnInit(): void {
    
  }

  logout() {
    this.authService.doLogout();
  }

  

}
