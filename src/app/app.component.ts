import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.addLangs(['pt-br','en']);
    translate.setDefaultLang('pt-br');

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/pt-br|en/) ? browserLang : 'pt-br');
  }
}
