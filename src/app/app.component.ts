import { Component } from '@angular/core';
import { Contact } from './contact-form/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contacts: Contact[] = [];
  selectedContact: Contact = new Contact();

  saveContact(contact: Contact) {
    if (!contact.name || !contact.phone || !contact.email) {
      alert('Please fill in all fields.');
      return;
    }

    const existingContact = this.contacts.find((c) => c.name === contact.name);
    if (existingContact) {
      Object.assign(existingContact, contact);
    } else {
      this.contacts.push(contact);
    }

    this.selectedContact = new Contact();
  }

  editContact(contact: Contact) {
    this.selectedContact = { ...contact };
  }

  deleteContact(contact: Contact) {
    const index = this.contacts.findIndex((c) => c.name === contact.name);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      this.selectedContact = new Contact();
    }
  }
}
