import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact-form/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  @Input() contacts: Contact[] = [];
  @Output() editContact = new EventEmitter<Contact>();
  @Output() deleteContact = new EventEmitter<Contact>();
}
