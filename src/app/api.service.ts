import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  // API_URL = 'http://178.128.160.165/api/';
   API_URL = 'http://127.0.0.1:8000/api/';

  _collections;
  _works;
  _directions;
  _artDirections;
  _photos;
  get collections() {
    return this._collections;
  }

  get works() {
    return this._works;
  }

  get directions() {
    return this._directions;
  }

  get artDirections() {
    return this._artDirections;
  }

  get photos() {
    return this._photos;
  }

  constructor(private http: HttpClient) {
  }

  downloadAll() {
    return new Promise((resolve, reject) => {
      Promise.all([this.downloadAllCollections(), this.downloadAllWorks()]).then(() => {
        resolve();
      }).catch(() => {
        reject();
      });
    });
  }

  downloadAllCollections() {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'collections/').subscribe(collections => {
        this._collections = collections;
        resolve();
      });
    });
  }

  downloadAllWorks() {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'works/').subscribe(works => {
        this._works = works;
        resolve();
      });
    });
  }

  getWorksByCollection(collectionId) {
    return this._works.filter(work => work.collection == collectionId);
  }

  getDirectingList() {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'directing/').subscribe(directions => {
        this._directions = directions;
        resolve();
      });
    });
  }

  getArtDirections() {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'artdirecting/').subscribe(directions => {
        this._artDirections = directions;
        resolve();
      });
    });
  }

  getPhotos() {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'photography/').subscribe(photos => {
        this._photos = photos;
        resolve();
      });
    });
  }
}
