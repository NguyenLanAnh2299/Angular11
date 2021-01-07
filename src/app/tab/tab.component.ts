import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {HomePageService} from '../_service/home-page.service';
import {ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  checkLogout = true;
  // @ts-ignore
  active: boolean;
  // @ts-ignore
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor(private homepageService: HomePageService, private route: ActivatedRoute, public translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'korean']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|korean/) ? browserLang : 'en');
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  logout(){
    localStorage.removeItem('currentUser');
    const  currentUder = localStorage.getItem('currentUser');
    if (!currentUder){
      this.checkLogout = false;
    }
  }
}
