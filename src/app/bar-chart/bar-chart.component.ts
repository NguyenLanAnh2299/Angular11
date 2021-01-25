import {Component, OnInit} from '@angular/core';
import { Label } from 'ng2-charts';
import {Chart, CompanyReport, CompanyReportResponse, QuarterData} from '../_model/chart';
import {ChartService} from '../_service/chart.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  valueYear!: true;
  charValue: Chart[] = [];
  public yearBarChartOptions: any = {
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

  public yearBarChartLabels: Label[] = [];
  public yearBarChartData: any[] = [
    // {data: [10], label: 'Năm', backgroundColor: 'rgba(0,123,255,0.56)'},
  ];


  public quarterBarChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          stepSize: 20,
        },
      }],
    },
    chartArea: {
      backgroundColor: 'gray'
    }
  };

  public quarterBarChartLabels: Label[] = [];
  public quarterBarChartData: any[] = [
    // {data: [10], label: 'Năm', backgroundColor: 'rgba(0,123,255,0.56)'},
  ];

  private companyReportDataSource: CompanyReport[] = [];

  private dataLabels: string[] = [];
  private dataYear: number[] = [];
  private dataQuarter: QuarterData[] = [];

  public isShowYearChart: boolean = false;
  public isShowQuarterChart: boolean = false;

  constructor(private chartService: ChartService) {
  }

// tslint:disable-next-line:typedef
  ngOnInit() {
   this.getAll();
  }
  // tslint:disable-next-line:typedef
  getAll(){
    // @ts-ignore
    this.chartService.getDataChart().subscribe((res: CompanyReportResponse) => {
      if(res){
          console.clear();
          console.log('res:::', res);
          this.companyReportDataSource = res.Chart;

          this.companyReportDataSource.forEach((item: CompanyReport)=>{
              this.dataLabels.push(item.name)
              this.dataYear.push(item.year)
              this.dataQuarter.push(item.quarter)
          });

          console.log('dataLabels:::', this.dataLabels);
          console.log('dataYear:::', this.dataYear);
          console.log('dataQuarter:::', this.dataQuarter);

          // default case year

          this.yearBarChartLabels = this.dataLabels;
          this.yearBarChartData = [{
            data: this.dataYear,
          }]

          this.isShowYearChart = true;

      }
      // this.charValue = res;
      // console.log('charValue111', this.charValue);
      // this.barChartData[0].data.push(this.charValue[0].year);
      // this.barChartData[1].data.push(this.charValue[1].year);
      // this.barChartData[2].data.push(this.charValue[2].year);
      // this.barChartData[3].data.push(this.charValue[3].year);
      // this.barChartData[4].data.push(this.charValue[4].year);
      // console.log('barChartData11111', this.barChartData);
    });
  }
  // tslint:disable-next-line:typedef
  onChange(modecase: string){
    if (modecase === 'year'){
      this.yearBarChartLabels = this.dataLabels;
      this.yearBarChartData = [{
        data: this.dataYear,
      }]

      this.isShowYearChart = true;
      this.isShowQuarterChart = false;

    }
    else if ( modecase === 'quarter') {
      // console.log('dataQuy', this.charValue);

      this.quarterBarChartLabels = this.dataLabels;

      let quarter_1: number[] = [];
      let quarter_2: number[] = [];
      let quarter_3: number[] = [];
      let quarter_4: number[] = [];

      this.dataQuarter.forEach((item: QuarterData) =>{
        quarter_1.push(item.quarter_1);
        quarter_2.push(item.quarter_2);
        quarter_3.push(item.quarter_3);
        quarter_4.push(item.quarter_4);
      });

      this.quarterBarChartData = [
        {
          data: quarter_1,
          label: this.dataLabels[0],
          backgroundColor: 'red'
        },{
          data: quarter_2,
          label: this.dataLabels[1],
          backgroundColor: 'green'
        },
        {
          data: quarter_3,
          label: this.dataLabels[2],
          backgroundColor: 'blue'
        },{
          data: quarter_4,
          label: this.dataLabels[3],
          backgroundColor: 'black'
        }
      ]

      this.isShowQuarterChart = true;
      this.isShowYearChart = false;
    }
  }
}
