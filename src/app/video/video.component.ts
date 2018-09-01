import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../models/video';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() video: Video;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getUrl(videoId) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + videoId);
  }
}
