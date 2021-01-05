import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  // @ts-ignore
  active: boolean;
  // @ts-ignore
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() { }

  ngOnInit(): void {
    const activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
  // tslint:disable-next-line:typedef
  selectTab(tab: any) {
    // deactivate all tabs
    // tslint:disable-next-line:no-shadowed-variable
    this.tabs.toArray().forEach(tab => (tab.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }

}
