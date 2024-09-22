import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentLang: string = 'en';

  constructor(private translate: TranslateService) {
    // Set the default language
    this.translate.setDefaultLang(this.currentLang);
    this.translate.use(this.currentLang);
  }

  changeLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.translate.use(lang);
  }
}
