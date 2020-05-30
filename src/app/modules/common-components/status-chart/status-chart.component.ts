import { Component, OnInit, Input } from '@angular/core';
// import * as Chartist from 'chartist-plugin-legend';
import { ChartType, ChartEvent } from '../ng-chart/ng-chart/ng-chart.component';

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-status-chart',
  templateUrl: './status-chart.component.html',
  styleUrls: ['./status-chart.component.css']
})
export class StatusChartComponent implements OnInit {

  @Input() chartConfig;
  chart: Chart;
  constructor() {
  }

  ngOnInit(): void {
    this.chart = {
      data: {
        series: this.chartConfig.data
      },
      options: this.chartConfig.options,
      type: this.chartConfig.type
    }
  }
}
