import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-director',
  templateUrl: './art-director.component.html',
  styleUrls: ['./art-director.component.scss']
})
export class ArtDirectorComponent implements OnInit {
  videos;

  constructor() { }

  ngOnInit() {
        //this.api.getArtDirections().then(() => {
    //  this.directions = this.api.directions;
    //})
    this.videos = [{"videoId": "286216759", 'description': 'some description'},
    {"videoId": "286216759", 'description': 'some description'},
    {"videoId": "286216759", 'description': 'some description'}]
  }

}
