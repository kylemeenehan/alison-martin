import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-art-director',
  templateUrl: './art-director.component.html',
  styleUrls: ['./art-director.component.scss']
})
export class ArtDirectorComponent implements OnInit {
  videos;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getArtDirections().then(() => {
      this.videos = this.api.artDirections;
    });
  }

}
