import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {HomePageService} from '../_service/home-page.service';
import {ActivatedRoute} from '@angular/router';

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

  constructor(private homepageService: HomePageService, private route: ActivatedRoute) { }

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
