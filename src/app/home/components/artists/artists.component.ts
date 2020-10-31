import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  imagesArtist: string[] = [
    'assets/img__carrousel/kamelia.jpg',
    'assets/img__carrousel/faydee.jpg',
    'assets/img__carrousel/carly.jpg',
    'assets/img__carrousel/jonasBrothers.jpg',
    'assets/img__carrousel/bilionera.jpg',
    'assets/img__carrousel/edSheeran.jpg',
    'assets/img__carrousel/lilNas.jpg',
    'assets/img__carrousel/drake.jpg',
    'assets/img__carrousel/faydeedj.jpg',
    'assets/img__carrousel/carly.jpg',
    'assets/img__carrousel/faydee.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
