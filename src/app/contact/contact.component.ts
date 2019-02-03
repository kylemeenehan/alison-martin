import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  Contact: Contact = { name: '', email: '', message: '', phone: '', created: new Date() };

  constructor(private api: ApiService) {

  }

  ngOnInit() {
  }

  /**
   * SE
   */
  public sendMessage() {
    this.api.postContact(this.Contact);
  }

}
