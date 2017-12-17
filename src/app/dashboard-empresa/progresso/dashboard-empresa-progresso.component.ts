import { Component } from '@angular/core';
import * as shape from 'd3-shape';
import { colorSets  } from '@swimlane/ngx-charts/release/utils/color-sets';
import {
  single, capacidade, produtividade,
  generateData
} from '../../shared/chartData';

@Component({
  selector: 'app-dashboard-empresa-progresso',
  templateUrl: './dashboard-empresa-progresso.component.html',
  styleUrls: ['./dashboard-empresa-progresso.component.scss']
})

export class DashboardEmpresaProgressoComponent {
  images: any[] = [];
  num = 1;

  capacidade: any[];
  produtividade: any[];

  single: any[];
  graph: {
    links: any[],
    nodes: any[]
  };
  dateData: any[];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  tooltipDisabled = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  roundDomains = false;
  colorScheme = {
    domain: [
    '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
    ]
  };
  schemeType = 'ordinal';
  // line interpolation
  curve = shape.curveLinear;
  // line, area
  timeline = false;
  // margin
  margin = false;
  marginTop = 40;
  marginRight = 40;
  marginBottom = 40;
  marginLeft = 40;
  // gauge
  gaugeMin = 0;
  gaugeMax = 50;
  gaugeLargeSegments = 10;
  gaugeSmallSegments = 5;
  gaugeTextValue = '';
  gaugeUnits = 'alerts';
  gaugeAngleSpan = 240;
  gaugeStartAngle = -120;
  gaugeShowAxis = true;
  gaugeValue = 50; // linear gauge value
  gaugePreviousValue = 70;

  // CAPACIDADE
  cap_colorScheme = {
    domain: [
      '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
    ]
  };

  // EFICIÊNCIA:"Produtividade"
  pro_showXAxis = true;
  pro_showYAxis = true;
  pro_gradient = false;
  pro_showLegend = false;
  pro_showXAxisLabel = true;
  pro_tooltipDisabled = false;
  pro_xAxisLabel = 'Sprint';
  pro_showYAxisLabel = true;
  pro_yAxisLabel = 'H/PF';
  pro_showGridLines = true;
  pro_innerPadding = 0;
  pro_barPadding = 8;
  pro_groupPadding = 16;
  pro_roundDomains = false;
  pro_maxRadius = 10;
  pro_minRadius = 3;
  pro_curve = shape.curveLinear;
  pro_colorScheme = {
    domain: [
      '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
    ]
  };
  pro_schemeType = 'ordinal';
  pro_rangeFillOpacity = 0.15;
  pro_autoScale = true;
  pro_timeline = false;

  // gauge
  esc_gaugeMin = 0;
  esc_gaugeMax = 2;
  esc_gaugeLargeSegments = 0.10;
  esc_gaugeSmallSegments = 0.5;
  esc_gaugeTextValue = '';
  esc_gaugeUnits = '';
  esc_gaugeAngleSpan = 240;
  esc_gaugeStartAngle = -120;
  esc_gaugeShowAxis = true;
  esc_gaugeValue = 1.27; // linear gauge value
  esc_gaugePreviousValue = 1;
  esc_colorScheme = {
    domain: [
      '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
    ]
  };

  constructor() {
    Object.assign(this, {
      single, capacidade, produtividade
    });
    this.dateData = generateData(5, false);

    for ( this.num; this.num <= 18; this.num += 1 ) {
      this.images.push( this.num );
    }
  }

  select(data) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }
}
