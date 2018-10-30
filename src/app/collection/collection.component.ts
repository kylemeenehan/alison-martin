import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  @ViewChild('container') container;
  collections;
  collection;
  images;
  works;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {
  }

  async ngOnInit() {
    if(!this.api.collections || !this.api.works) {
      await this.api.downloadAll();
    }
    this.collections = this.sortCollections(this.api.collections);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.container.nativeElement.scrollTop = 0;
      let id = params.get('id');
      if (id == '0') {
        id = '4'; // this was the id of the collection that we want to display first if navtigating to the page the first time. Probably not anymore though.
      }
      this.collection = this.collections.find(collection => collection.id == id);
      this.works = this.api.getWorksByCollection(id);
    });
  }

  sortCollections = (collections: any) =>
  collections.sort((a, b) => {
    if (Number(a.sort_order) < Number(b.sort_order)) { return -1; }
    if (Number(a.sort_order) === Number(b.sort_order)) { return 0; }
    if (Number(a.sort_order) > Number(b.sort_order)) { return 1; }
    return 0;
  })
}
