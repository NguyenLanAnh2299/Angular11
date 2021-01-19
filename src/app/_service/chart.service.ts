import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }
  // tslint:disable-next-line:typedef
  getSales() {
    return of({
      "Contractors1": {
        "volumeSales": "100",
        "Quarter":  {
          "Quarter1": 20,
          "Quarter2": 30,
          "Quarter3": 15,
          "Quarter4": 35
        }
      },
      "Contractors2": {
        "volumeSales": "90",
        "Quarter":  {
          "Quarter1": 25,
          "Quarter2": 40,
          "Quarter3": 15,
          "Quarter4": 50
        }
      },
      "Contractors3": {
        "volumeSales": "80",
        "Quarter":  {
          "Quarter1": 35,
          "Quarter2": 45,
          "Quarter3": 10,
          "Quarter4": 15
        }
      },
        "Contractors4":{
        "volumeSales": "70",
        "Quarter":  {
          "Quarter1": 20,
          "Quarter2": 25,
          "Quarter3": 15,
          "Quarter4": 10
        }
      },
      "Contractors5": {
        "volumeSales": "60",
        "Quarter":  {
          "Quarter1": 10,
          "Quarter2": 35,
          "Quarter3": 15,
          "Quarter4": 40
        }
      }
    });
  }
}