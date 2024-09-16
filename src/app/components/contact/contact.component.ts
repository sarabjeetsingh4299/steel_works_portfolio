import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  submitContactForm() {
    console.log('Form Submitted:', this.contactForm);
    // You can add form submission logic here
  }
}
