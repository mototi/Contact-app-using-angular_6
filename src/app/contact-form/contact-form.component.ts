import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  @Input() contact: Contact = new Contact();
  @Output() saveContact = new EventEmitter<Contact>();
}
