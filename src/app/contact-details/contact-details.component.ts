import { Component, Input } from '@angular/core';
import { Contact } from '../contact-form/contact.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent {
  @Input() contact: Contact = new Contact();
}
