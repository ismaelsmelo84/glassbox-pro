import { Component } from '@angular/core';
import * as shape from 'd3-shape';
import { colorSets  } from '@swimlane/ngx-charts/release/utils/color-sets';
import {
  single, sistemas, dispersaoSprints, capacidade,
  generateData
} from '../../shared/chartData';

@Component({
  selector: 'app-dashboard-portfolio-diagnostico',
  templateUrl: './dashboard-portfolio-diagnostico.component.html',
  styleUrls: ['./dashboard-portfolio-diagnostico.component.scss']
})

export class DashboardPortfolioDiagnosticoComponent {
  single: any[];
  sistemas: any[];
  capacidade: any[];
  dispersaoSprints: any;
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

  // MAPA DE APLICAÇÕES
  sis_tooltipDisabled = false;
  sis_colorScheme = {
    domain: [
      '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
    ]
  };

  // DISPERSÃO
  dis_view: any;
  dis_showXAxis = true;
  dis_showYAxis = true;
  dis_showXAxisLabel = true;
  dis_tooltipDisabled = false;
  dis_xAxisLabel = 'Esforço';
  dis_showYAxisLabel = true;
  dis_yAxisLabel = 'Taxa de Entrega';
  dis_showGridLines = true;
  dis_roundDomains = false;
  dis_maxRadius = 10;
  dis_minRadius = 3;
  dis_colorScheme = {
    domain: [
      '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
    ]
  };
  dis_schemeType = 'ordinal';
  dis_autoScale = true;

  // CAPACIDADE
  cap_colorScheme = {
    domain: [
      '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
    ]
  };

  constructor() {
    Object.assign(this, {
      single, sistemas, dispersaoSprints, capacidade
    });
    this.dateData = generateData(5, false);
  }

  select(data) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }
}
