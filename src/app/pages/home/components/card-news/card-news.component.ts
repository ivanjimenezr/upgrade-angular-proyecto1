import { Icard } from './models/icard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss']
})
export class CardNewsComponent implements OnInit {
  public card!: Icard[];
  public mini_card!: Icard[];
  constructor() { 

      this.card = [
        {
          src: 'https://st3.idealista.com/news/archivos/styles/idn_home_article_media_mobile/public/2021-12/vivienda_de_lujo_en_chicago_engel_volkers_chicago.jpg?sv=mXGLb6sn&itok=HBTCx5F4',
          descrip: 'Los propietarios entre 24 y 56 años serán los principales vendedores de casas de lujo en EEUU',
          link: 'Leer más',
        },
        {
          src: 'https://st3.idealista.com/news/archivos/styles/idn_home_article_media_mobile/public/2021-12/global-gdp-by-country-2021-v15-mobile-1.jpg?sv=hUMyuzPm&itok=UrVIFoJ3',
          descrip: 'Imagen del día: lo que contribuye cada país al PIB Mundial',
          link: 'Leer más',
        },
        {
          src: 'https://st3.idealista.com/news/archivos/styles/idn_home_article_media_mobile/public/2021-12/ndp-cafmadrid-alegaciones-pgou.jpg?sv=-PAujAD9&itok=rIQgt4C5',
          descrip: '¿En peligro el uso residencial de los edificios? según Juanjo Bueno',
          link: 'Leer más',
        },
      ]
      this.mini_card = [
        {
          src: '../../../../../assets/minicard1.gif',
          titular:'Dibuja tu zona de búsqueda',
          descrip:'Elegir exactamente la zona que estás buscando sobre un mapa.',
          link:'Empezar a dibujar tu búsqueda',            
        },
        {
          src: '../../../../../assets/minicard2.gif',
          titular:'Publicar tu inmueble gratis',
          descrip:'Tus 2 primeros anuncios son gratis. Casas, habitaciones, oficinas… ¡Todo cabe!',
          link:'Poner tu anuncio gratis',            
        },
      ]

  }

  ngOnInit(): void {
  }

}
