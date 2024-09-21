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

  customers = [
    {
      name: 'Manjeet Singh',
      phone: '9425567079',
      address: 'Madhya Pradesh'
    },
    {
      name: 'Inderjeet Singh',
      phone: '9425557689',
      address: 'Chhattisgarh'
    },
    {
      name: 'Amanpreet Singh',
      phone: '9399982281',
      address: 'Orissa'
    }
  ];
  
  submitContactForm() {
    console.log('Form Submitted:', this.contactForm);
    // You can add form submission logic here
  }

  callPhoneNumber(phoneNumber:string) {// replace with your phone number
    if (this.isMobileDevice()) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Optionally, show a message or redirect to a contact form
      alert('This feature is available on mobile devices only.');
    }
  }
  
  isMobileDevice(): boolean {
    return /Mobi|Android/i.test(navigator.userAgent);
  }
  
}
