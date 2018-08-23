import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit {
  videos;
  constructor(private api: ApiService ) { }
  
  
  ngOnInit() {
    //this.api.getVideos().then(() => {
    //  this.videos = this.api.videos;
    //})
    this.videos = [{"videoId": "286216759", 'description': 'some description'},
    {"videoId": "286216759", 'description': 'some description'},
    {"videoId": "286216759", 'description': 'some description'}]
  }
}
