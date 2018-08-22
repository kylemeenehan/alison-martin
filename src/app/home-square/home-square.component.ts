import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../models/title';

@Component({
  selector: 'app-home-square',
  templateUrl: './home-square.component.html',
  styleUrls: ['./home-square.component.scss']
})
export class HomeSquareComponent implements OnInit {
  @Input() title: Title;

  constructor() { }

  ngOnInit() {
  }

}
