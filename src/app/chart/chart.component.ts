import {Component, OnInit} from '@angular/core';
import {ChartService} from '../_service/chart.service';
import {Chart} from '../_model/chart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  ChartValue: any;
  valueYear!: true;
  chartValue: any;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          stepSize: 20,
        },
      }],
    }
  };
  datas: Chart[] = [];
  private dataSource: any;
  // @ts-ignore
  public barChartLabels;
  // @ts-ignore
  public barChartLabelQuater;
  public barChartLegend = true;
  public barChartData: any[] = [
    {data: [], label: 'Năm',  backgroundColor: 'rgba(0,123,255,0.56)' },
    // { data: [], label: 'Quý 1'},
    // { data: [], label: 'Quý 2'},
    // { data: [], label: 'Quý3'},
    // { data: [], label: 'Quý 4'}
  ];
  // public barChartDataQuater: any[] = [
  //   { data: [], label: 'Quý 1'},
  //   { data: [], label: 'Quý 2'},
  //   { data: [], label: 'Quý 3'},
  //   { data: [], label: 'Quý 4'}
  // ];

  constructor(private chartService: ChartService) {
    // tslint:disable-next-line:label-position
  }
// tslint:disable-next-line:typedef
  ngOnInit() {
    // tslint:disable-next-line:label-position
    this.chartService.getSales().subscribe(data => {
      // @ts-ignore
      this.dataSource = data;
      this.barChartLabels = Object.keys(data);
      console.log('this.dataSource:::', this.dataSource);
      // default show case year
      this.barChartLabels.forEach((key: any) => {
        console.log('data:::', key);
        this.barChartData.push({
          data: this.dataSource[key].volumeSales,
          label: key
        });
        console.log('this.barChartData:::', this.barChartData);
      });

      // this.barChartLabels.forEach((label: any) => {
      //   // @ts-ignore
      //   this.barChartData[0].data.push(data[label].volumeSales);
      //
      //   // @ts-ignore
      //   // const objet = Object.entries(data[label].Quarter);
      //   // const count = objet.length;
      //   // let i = 1;
      //   // for (const [key, value] of objet) {
      //   //   this.barChartData[i].data.push(value);
      //   //   i++;
      //   // }
      // });
      // @ts-ignore
      // this.barChartLabels.forEach(label => {
      //   // @ts-ignore
      //   const objet = Object.entries(data[label].Quarter);
      //   const count = objet.length;
      //   let i = 0;
      //   for (const [key, value] of objet) {
      //     this.barChartDataQuater[i].data.push(value);
      //     i++;
      //   }
      // });
    });
  }

  // tslint:disable-next-line:typedef
  onChange(modeCase: string){
    // @ts-ignore
    this.barChartData = [];
    console.log('barChartData222:::', this.barChartData);
    if (!this.valueYear){
      this.valueYear = true;
    }
    else {
      // @ts-ignore
      this.valueYear = false;
    //  case quarter
    }
    // console.log(this.valueYear);
    if (modeCase === 'year'){

      //  case year
      this.barChartLabels.forEach((key: any) => {
        console.log('data:::', key);
        this.barChartData.push({
          data: this.dataSource[key].volumeSales,
          label: key
        });
        console.log('this.barChartData:::', this.barChartData);
      });
    }else{
      // this.barChartLabels.forEach(label => {
      //   // @ts-ignore
      //   const objet = Object.entries(data[label].Quarter);
      //   const count = objet.length;
      //   let i = 0;
      //   for (const [key, value] of objet) {
      //     this.barChartDataQuater[i].data.push(value);
      //     i++;
      //   }
      // });
      //  case quarter
      this.barChartLabels.forEach((data: any) => {
        console.log('data:::', data);
        const quarterList = Object.values(this.dataSource[data].Quarter);
        const quarterLabel = Object.keys(this.dataSource[data].Quarter);
        console.log('quarterList:::', quarterList);
        console.log('quarterLabel:::', quarterLabel);
        this.barChartData.push({
          data: quarterList,
          label: data
        });
        console.log('this.barChartData:::', this.barChartData);
      });
    }
  }
}
