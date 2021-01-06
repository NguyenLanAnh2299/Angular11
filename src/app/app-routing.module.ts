import { NgModule } from '@angular/core';
import {Routes, RouterModule, ActivatedRoute} from '@angular/router';
import { HomePageComponent } from './HomePage/home-page.component';
import {ModalsComponent} from './modals/modals.component';
import {PaginationComponent} from './pagination/pagination.component';
import {AppComponent} from './app.component';
import {TabComponent} from './tab/tab.component';
import {UserComponent} from './user/user.component';
import {PageMessageComponent} from './page-message/page-message.component';

const routes: Routes = [
  {
    path: '',
    component: TabComponent
  },
  {
    path: 'tab',
    component: TabComponent
  },
  { path: '**',
    component: PageMessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule {
  constructor(private route: ActivatedRoute ) {
   this.route.queryParams.subscribe((params) => {
     console.log(params);
     console.log(routes);
   });
  }
}
