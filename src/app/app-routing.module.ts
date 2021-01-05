import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './HomePage/home-page.component';
import {ModalsComponent} from './modals/modals.component';
import {PaginationComponent} from './pagination/pagination.component';
import {AppComponent} from './app.component';
import {TabComponent} from './tab/tab.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'HomePage',
    component: HomePageComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  // {
  //   path: 'pagination',
  //   component: PaginationComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
