import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'demo';
  constructor(private route: ActivatedRoute, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.addLangs(['en', 'fr']);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
  // tslint:disable-next-line:typedef
  // checkURl(){
  //   this.route.queryParams.subscribe((prams) =>{
  //     console.log(prams);
  //   });
  // }
}
