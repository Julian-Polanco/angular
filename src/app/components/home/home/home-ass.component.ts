import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-ass',
  templateUrl: './home-ass.component.html',
  styleUrls: ['./home-ass.component.css']
})
export class HomeComponent implements OnInit {

  bookForm: FormGroup;

  slides = [
    { 'image': '../../../../assets/images/home/image1.png' },
    { 'image': '../../../../assets/images/home/image2.png' },
    { 'image': '../../../../assets/images/home/image3.png' },
    { 'image': '../../../../assets/images/home/image4.png' },
    { 'image': '../../../../assets/images/home/image5.png' },
    { 'image': '../../../../assets/images/home/image6.png' },
    { 'image': '../../../../assets/images/home/image7.png' },
    { 'image': '../../../../assets/images/home/image8.png' },
    { 'image': '../../../../assets/images/home/image9.png' }
  ];

  cards = [
    {
      title: 'Últimas noticias',
      descripion: `Nos gustaría acercarte cada día un poco más a nuestra región: su oferta
      culinaria, sus oportunidades para practicar deportes al aire libre, pero también su potencial como lugar
      tranquilo de contemplación. En la siguiente sección, le contamos un poco más sobre lo que está sucediendo en este momento.`,
      image: 'img1.jpg'
    },
    {
      title: 'Gastronomia',
      descripion: `Podrá degustar los platos más representativos de nuestro país de las diferentes regiones gracias a que contamos
      con los mejores chef del pais.`,
      image: 'gastronomy.jpg'
    },
    {
      title: 'Proximos Eventos',
      descripion: `Le ofrecemos el mejor equipamiento tecnológico y ayuda especializada para que su evento sea todo un éxito.`,
      image: 'eventos.jpg'
    }
  ];

  constructor() {
    this.bookForm = new FormGroup({
      dateStart: new FormControl('', [Validators.required]),
      dateEnd: new FormControl('', [Validators.required]),
      guestNumber: new FormControl('', [Validators.required, Validators.min(0), Validators.max(6)])
    })
  }

  ngOnInit(): void {
  }

  public searchRooms(): void {

  }

  public searchRoomsIsValid(): boolean {
    return this.bookForm.invalid;
  }


}
