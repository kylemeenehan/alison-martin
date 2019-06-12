import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit {
  videos;
  constructor(private api: ApiService) { }


  ngOnInit() {
    this.api.getDirectingList(1).then(() => {
     this.videos = this.api.directions;
    });
  }
}
