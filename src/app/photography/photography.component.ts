import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {
  photos;

  constructor(
    private api: ApiService

  ) { }

  ngOnInit() {
    this.api.getPhotos(2).then(() => {
      this.photos = this.api.photos;
    });
  }

}
