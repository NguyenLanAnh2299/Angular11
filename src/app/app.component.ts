import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'demo';
  constructor(private route: ActivatedRoute) {
  }
  // tslint:disable-next-line:typedef
  checkURl(){
    this.route.queryParams.subscribe((prams) =>{
      console.log(prams);
    });
  }
}
