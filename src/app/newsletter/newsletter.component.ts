import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  errorMessage: string = '';

  validateEmail(email:string) {
    this.errorMessage = "";

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      this.errorMessage = "E-mail incorrect";
    }
  }

  sendMail() {
    this.errorMessage = "Pas d'erreur! barvo!";
  }
}
