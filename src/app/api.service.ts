import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  //API_URL = 'http://178.128.160.165/api/';
  // API_URL = 'http://127.0.0.1:8000/api/';
   API_URL = 'https://localhost:44307/v1/api/';

  _collections;
  _works;
  _directions;
  _artDirections;
  _photos;
  _contact;

  get contact() {
    return this._contact;
  }

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
      this.http.get(this.API_URL + `collection`).subscribe(collections => {
        this._collections = collections;
        resolve();
      });
    });
  }

  downloadAllWorks() {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'work').subscribe(works => {
        this._works = works;
        resolve();
      });
    });
  }

  getWorksByCollection(collectionId) {
    return this._works.filter(work => work.collectionId == collectionId);
  }

  getDirectingList(id: Number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + `direction/${id}`).subscribe(directions => {
        this._directions = directions;
        resolve();
      });
    });
  }

  getPhotos(id: Number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + `work/${id}`).subscribe(photos => {
        this._photos = photos;
        resolve();
      });
    });
  }

  postContact(contact) {
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + 'contact', contact).subscribe(result => {
        this._contact = result;
        resolve();
      });
    });
  }
}
