import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

import * as Chartist from 'chartist';
import { IChartistBase, IChartOptions } from 'chartist';

/**
 * Possible chart types
 */
export type ChartType = 'Pie' | 'Bar' | 'Line';

export type ChartInterfaces =
  | Chartist.IChartistPieChart
  | Chartist.IChartistBarChart
  | Chartist.IChartistLineChart;
export type ChartOptions =
  | Chartist.IBarChartOptions
  | Chartist.ILineChartOptions
  | Chartist.IPieChartOptions;
export type ResponsiveOptionTuple = Chartist.IResponsiveOptionTuple<
  ChartOptions
>;
export type ResponsiveOptions = ResponsiveOptionTuple[];

/**
 * Represents chart events.
 */
export interface ChartEvent {
  [eventName: string]: (data: any) => void;
}

/**
 * Angular component which renders Chartist chart.
 *
 * See Chartist {@link https://gionkunz.github.io/chartist-js/api-documentation.html API documentation} and
 * {@link https://gionkunz.github.io/chartist-js/examples.html examples} for more information.
 * ### Example
 ```html
 <x-chartist
   [type]="type"
   [data]="data"
   [options]="options"
   [responsiveOptions]="responsiveOptions"
   [events]="events"
 ></x-chartist>
*/

@Component({
  selector: 'ngx-chart',
  template: '',
  styles: [
    `
    :host {
      display: block;
    }`
  ]
})
export class NgChartComponent implements OnInit, OnChanges, OnDestroy {

  @Input() data: Chartist.IChartistData;

  @Input() type: ChartType;

  @Input() options: Chartist.IChartOptions;

  @Input() responsiveOptions: ResponsiveOptions;

  @Input() events: ChartEvent;

  @Output() initialize = new EventEmitter<ChartInterfaces>();

  private chart: ChartInterfaces;
  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    if(this.type && this.data) {
      this.renderChart();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.update(changes);
  }

  ngOnDestroy(): void {
    if(this.chart) {
      this.chart.detach();
      this.chart = null;
    }
  }

  private renderChart = (): void => {
    const nativeElement = this.elementRef.nativeElement;

    if(!(this.type in Chartist)) {
      throw new Error(`${this.type} is not valid chart type`);
    }

    this.chart = (<any>Chartist)[this.type](
      nativeElement,
      this.data,
      this.options,
      this.responsiveOptions
    );
    if(this.events) {
      this.bindEvents();
    }

    this.initialize.emit(this.chart);
  }

  private update = (changes: SimpleChanges): void => {
    if(!this.type || !this.data) {
      return;
    }
    
    if(!this.chart ||'type' in changes) {
      this.renderChart();
    } else if(changes.data || changes.options) {
      (<IChartistBase<IChartOptions>>this.chart).update(
        this.data,
        this.options
      )
    }
  }

  private bindEvents = (): void => {
    for(const event of Object.keys(this.events)) {
      this.chart.on(event, this.events[event]);
    }
  }

}
