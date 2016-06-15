import {Component} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {ChartistJsComponent} from "./components/chartistJs/chartistJs.component";

@Component({
  selector: 'maps',
  template: '<router-outlet></router-outlet>'
})

@RouteConfig([
  {
    name: 'ChartistJs',
    component: ChartistJsComponent,
    path: '/chartist-js',
    useAsDefault: true,
  }
])
export class ChartsComponent {

  constructor() {
  }

  ngOnInit() {
  }

}
