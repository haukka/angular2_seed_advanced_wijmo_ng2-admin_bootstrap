import {ViewEncapsulation} from '@angular/core';
import {BaseComponent} from '../../../../../frameworks/core.framework/index';

@BaseComponent({
  selector: 'chartist-js',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app/components/app/charts/components/chartistJs/chartistJs.html'
})

export class ChartistJsComponent {

  data:any;

  constructor() {
  }

  ngOnInit() {
  }

}
