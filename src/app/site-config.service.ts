import { Injectable } from '@angular/core';

@Injectable()
export class SiteConfigService {

  collections = [
     {
      title: 'Watercolor',
      url: 'watercolor',
      numberOfImages: 10
    },
    {
      title: 'Circular Exploration',
      url: 'circular-exploration',
      numberOfImages: 5
    },
    {
      title: 'Cosmic Wave',
      url: 'cosmic-wave',
      numberOfImages: 4
    },
    {
      title: 'Geowhat',
      url: 'geowhat',
      numberOfImages: 9
    },
    {
      title: 'Pink Purple Up',
      url: 'pink-purple-up',
      numberOfImages: 8
    },
    {
      title: 'In Your Face',
      url: 'in-your-face',
      numberOfImages: 14
    },
    {
      title: 'Mini Cosmos',
      url: 'mini-cosmos',
      numberOfImages: 10
    },
    {
      title: 'Linear',
      url: 'linear',
      numberOfImages: 6
    },
    {
      title: 'Small Universe',
      url: 'small-universe',
      numberOfImages: 9
    },
    {
      title: 'Black and White and Small',
      url: 'black-and-white-and-small',
      numberOfImages: 23
    },
    {
      title: 'There was a Weasel',
      url: 'there-was-a-weasel',
      numberOfImages: 5
    },
    {
      title: 'Chalk Pastel',
      url: 'chalk-pastel',
      numberOfImages: 7
    },
    {
      title: 'Creatures',
      url: 'creatures',
      numberOfImages: 10
    },
    {
      title: 'Eye See a Sunset',
      url: 'eye-see-a-sunset',
      numberOfImages: 2
    },
    {
      title: 'String Art',
      url: 'string-art',
      numberOfImages: 2
    },
  ];

  constructor() { }

  getCollection(url) {
    const collectionArray =  this.collections.filter((collection) => {
      return collection.url === url;
    });

    return collectionArray[0];

  }

  getCollections() {
    return this.collections;
  }

}
