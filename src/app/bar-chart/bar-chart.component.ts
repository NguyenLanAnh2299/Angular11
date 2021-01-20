import {Component, OnInit} from '@angular/core';
import {Chart} from '../_model/chart';
import {ChartService} from '../_service/chart.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  valueYear!: true;
  charValue: Chart[] = [];
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
  // @ts-ignore
  public barChartLabels;
  // @ts-ignore
  public barChartLabelQuater;
  public barChartData: any[] = [
    {data: [], label: 'Năm', backgroundColor: 'rgba(0,123,255,0.56)'},
  ];
  constructor(private chartService: ChartService) {
  }

// tslint:disable-next-line:typedef
  ngOnInit() {
   this.getAll();
  }
  // tslint:disable-next-line:typedef
  getAll(){
    // @ts-ignore
    this.chartService.getDataChart().subscribe((res: Chart[]) => {
      this.charValue = res;
      console.log('charValue111', this.charValue);
      this.barChartData[0].data.push(this.charValue[0].year);
      // this.barChartData[1].data.push(this.charValue[1].year);
      // this.barChartData[2].data.push(this.charValue[2].year);
      // this.barChartData[3].data.push(this.charValue[3].year);
      // this.barChartData[4].data.push(this.charValue[4].year);
      console.log('barChartData11111', this.barChartData);
    });
  }
  // tslint:disable-next-line:typedef
  onChange(modecase: string){
    if (modecase === 'year'){
      this.getAll();
    }
    else if ( modecase === 'quarter') {
      console.log('dataQuy', this.charValue);
    }
  }
}
