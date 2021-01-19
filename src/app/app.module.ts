import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './HomePage/home-page.module';
import {ModalsComponent} from './modals/modals.component';
import { UserComponent } from './user/user.component';
import { PopupComponent } from './popup/popup.component';
import { PaginationComponent } from './pagination/pagination.component';
import {PagerService} from './_service/pager.service';
import { TabComponent } from './tab/tab.component';
import { PageMessageComponent } from './page-message/page-message.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { ChartComponent } from './chart/chart.component';
import {ChartsModule} from 'ng2-charts';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    ModalsComponent,
    UserComponent,
    PopupComponent,
    PaginationComponent,
    TabComponent,
    PageMessageComponent,
    ChartComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomePageModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        ChartsModule,
        FormsModule
    ],
  providers: [
    PagerService
  ],
  exports: [
    PaginationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// tslint:disable-next-line:typedef
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

