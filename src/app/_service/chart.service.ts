import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {HttpClient} from '@angular/common/http';
import { CompanyReportResponse } from '../_model/chart';


const chartUrl = 'http://localhost:3000/Chart';
// const chartUrl = 'http://127.0.0.1:5500/src/db.json';
@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor(private httpClient: HttpClient) { }
  // tslint:disable-next-line:typedef
  getSales() {
    return of({
      Contractors1: {
        volumeSales: '100',
        Quarter:  {
          Quarter1: 20,
          Quarter2: 30,
          Quarter3: 15,
          Quarter4: 35
        }
      },
      Contractors2: {
        volumeSales: '90',
        Quarter:  {
          Quarter1: 25,
          Quarter2: 40,
          Quarter3: 15,
          Quarter4: 50
        }
      },
      Contractors3: {
        volumeSales: '80',
        Quarter:  {
          Quarter1: 35,
          Quarter2: 45,
          Quarter3: 10,
          Quarter4: 15
        }
      },
        Contractors4: {
        volumeSales: '70',
        Quarter:  {
          Quarter1: 20,
          Quarter2: 25,
          Quarter3: 15,
          Quarter4: 10
        }
      },
      Contractors5: {
        volumeSales: '60',
        Quarter:  {
          Quarter1: 10,
          Quarter2: 35,
          Quarter3: 15,
          Quarter4: 40
        }
      },
	  Contractors5: {
        volumeSales: '60',
        Quarter:  {
          Quarter1: 10,
          Quarter2: 35,
          Quarter3: 15,
          Quarter4: 40
        }
      }
	  
    });
  }
  // hhhhhhhhhhhhhhhhhhhhhhhhhhhh
  getDataChart(): Observable<CompanyReportResponse> {
    return this.httpClient.get<CompanyReportResponse>(chartUrl);
  }
}
