import { Component } from '@angular/core';
import * as shape from 'd3-shape';
import * as d3 from 'd3';
import { colorSets  } from '@swimlane/ngx-charts/release/utils/color-sets';
import {
  atingimentoMetas, qualidade,
  custoPf, produtividade, velocidade, txEntrega, tmpAtendimento, eficiencia,
  satisfacaoUsuario, expectativaValor,
  maturidade,
  termometro,
  generateData, multi, consolidado
} from '../shared/chartData';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { scaleLinear, scaleTime, scalePoint } from 'd3-scale';
import { curveCardinalClosed } from 'd3-shape';


@Component({
  selector: 'app-dashboard-time',
  templateUrl: './dashboard-time.component.html',
  styleUrls: ['./dashboard-time.component.scss']
})

export class DashboardTimeComponent {

  //--------------------------------------------------------------------------

  // GRUPOS DE DADOS
  t: any;

  atingimentoMetas: any[];
  qualidade: any[];
  custoPf: any[];
  produtividade: any[];
  txEntrega: any[];
  velocidade: any[];
  tmpAtendimento: any[];
  eficiencia: any[];
  satisfacaoUsuario: any[];
  expectativaValor: any[];
  maturidade: any[];
  termometro: any[];
  multi: any[];
  consolidado: any[];
  m1graph: {
    links: any[],
    nodes: any[]
  };
  dateData: any[];
  dateDataWithRange: any[];
  range = false;

  //--------------------------------------------------------------------------

  // RADAR (em testes)

    rad_view: any[];
    rad_width: number = 700;
    rad_height: number = 300;
    rad_fitContainer: boolean = false;
    rad_autoScale = true;
    rad_showYAxis = true;
    rad_showXAxis = true;
    rad_gradient = false;
    rad_showLegend = true;
    rad_legendTitle = 'Legend';
    rad_showXAxisLabel = true;
    rad_tooltipDisabled = false;
    rad_xAxisLabel = 'Country';
    rad_showYAxisLabel = true;
    rad_yAxisLabel = 'GDP Per Capita';
    rad_showGridLines = true;
    rad_innerPadding = '10%';
    rad_barPadding = 8;
    rad_groupPadding = 16;
    rad_roundDomains = true;
    rad_maxRadius = 10;
    rad_minRadius = 3;
    rad_showSeriesOnHover = true;
    rad_roundEdges = true;
    rad_animations = false;
    rad_xScaleMin: any;
    rad_xScaleMax: any;
    rad_yScaleMin: number;
    rad_yScaleMax: number;
    rad_curves = {
      Basis: shape.curveBasis,
      'Basis Closed': shape.curveBasisClosed,
      Bundle: shape.curveBundle.beta(1),
      Cardinal: shape.curveCardinal,
      'Cardinal Closed': shape.curveCardinalClosed,
      'Catmull Rom': shape.curveCatmullRom,
      'Catmull Rom Closed': shape.curveCatmullRomClosed,
      Linear: shape.curveLinear,
      'Linear Closed': shape.curveLinearClosed,
      'Monotone X': shape.curveMonotoneX,
      'Monotone Y': shape.curveMonotoneY,
      Natural: shape.curveNatural,
      Step: shape.curveStep,
      'Step After': shape.curveStepAfter,
      'Step Before': shape.curveStepBefore,
      default: shape.curveLinear
    };
    rad_curveType: string = 'Linear';
    rad_curve: any = this.rad_curves[this.rad_curveType];
    rad_interpolationTypes = [
      'Basis', 'Bundle', 'Cardinal', 'Catmull Rom', 'Linear', 'Monotone X',
      'Monotone Y', 'Natural', 'Step', 'Step After', 'Step Before'
    ];
    rad_closedCurveType: string = 'Linear Closed';
    rad_closedCurve: any = this.rad_curves[this.rad_closedCurveType];
    rad_closedInterpolationTypes = [
      'Basis Closed', 'Cardinal Closed', 'Catmull Rom Closed', 'Linear Closed'
    ];
    rad_colorSets: any;
    rad_colorScheme: any;
    rad_schemeType: string = 'ordinal';
    rad_selectedColorScheme: string;
    rad_rangeFillOpacity: number = 0.15;

  //--------------------------------------------------------------------------

  // EFICÁCIA: "Atingimento das Metas"
  atm_tooltipDisabled = false;
  atm_gradient = false;
  atm_colorScheme = {
    domain: [
      '#4cc3d9', '#ffc65d', '#d96557'
    ]
  };

  // EFICÁCIA: "Qualidade nas Entregas"
  qua_colorScheme = {
    domain: [
      '#4cc3d9', '#ffc65d', '#d96557'
    ]
  };

  //--------------------------------------------------------------------------

  // EFETIVIDADE: "Satisfação do Usuário"
  sat_gradient = false;
  sat_tooltipDisabled = true
  sat_showLegend = false;
  sat_showLabels = true;
  sat_explodeSlices = false;
  sat_doughnut = false;
  sat_arcWidth = 0.50;
  sat_colorScheme = {
    domain: [
      '#4cc3d9', '#ffc65d', '#d96557'
    ]
  };

  // EFETIVIDADE: "Perspectiva de Valor"
  per_gradient = false;
  per_tooltipDisabled = true
  per_showLegend = false;
  per_showLabels = true;
  per_explodeSlices = false;
  per_doughnut = false;
  per_arcWidth = 0.50;
  per_colorScheme = {
    domain: [
      '#4cc3d9', '#ffc65d', '#d96557'
    ]
  };

  //--------------------------------------------------------------------------

  // EFICIÊNCIA: "Custo"
  cus_showXAxis = true;
  cus_showYAxis = true;
  cus_gradient = false;
  cus_showLegend = false;
  cus_showXAxisLabel = true;
  cus_tooltipDisabled = false;
  cus_xAxisLabel = 'Sprint';
  cus_showYAxisLabel = true;
  cus_yAxisLabel = 'R$/PF';
  cus_showGridLines = true;
  cus_innerPadding = 0;
  cus_barPadding = 8;
  cus_groupPadding = 16;
  cus_roundDomains = false;
  cus_maxRadius = 10;
  cus_minRadius = 3;
  cus_colorScheme = {
    domain: [
      '#0099cc', '#2ECC71', '#4cc3d9'
    ]
  };
  cus_schemeType = 'ordinal';

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

  // EFICIÊNCIA:"Taxa de Entrega"
  txe_showXAxis = true;
  txe_showYAxis = true;
  txe_gradient = false;
  txe_showLegend = false;
  txe_showXAxisLabel = true;
  txe_tooltipDisabled = false;
  txe_xAxisLabel = 'Sprint';
  txe_showYAxisLabel = true;
  txe_yAxisLabel = 'PF/PS';
  txe_showGridLines = true;
  txe_innerPadding = 0;
  txe_barPadding = 8;
  txe_groupPadding = 16;
  txe_roundDomains = false;
  txe_maxRadius = 10;
  txe_minRadius = 3;
  txe_curve = shape.curveLinear;
  txe_colorScheme = {
    domain: [
      '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
    ]
  };
  txe_schemeType = 'ordinal';
  txe_rangeFillOpacity = 0.15;
  txe_autoScale = true;
  txe_timeline = false;

  // EFICIENCIA: "Velocidade"
  vel_showXAxis = true;
  vel_showYAxis = true;
  vel_gradient = false;
  vel_showLegend = false;
  vel_showXAxisLabel = true;
  vel_tooltipDisabled = false;
  vel_xAxisLabel = 'Sprint';
  vel_showYAxisLabel = true;
  vel_yAxisLabel = 'PF/Sprint';
  vel_showGridLines = true;
  vel_barPadding = 2;
  vel_groupPadding = 6;
  vel_roundDomains = false;
  vel_colorScheme = {
    domain: [
      '#0099cc', '#2ECC71', '#4cc3d9'
    ]
  };
  vel_schemeType = 'ordinal';

  // EFICIÊNCIA:"Tempo de Atendimento"
  tat_showXAxis = true;
  tat_showYAxis = true;
  tat_gradient = false;
  tat_showLegend = false;
  tat_showXAxisLabel = true;
  tat_tooltipDisabled = false;
  tat_xAxisLabel = 'Sprint';
  tat_showYAxisLabel = true;
  tat_yAxisLabel = 'Dias';
  tat_showGridLines = true;
  tat_innerPadding = 0;
  tat_barPadding = 8;
  tat_groupPadding = 16;
  tat_roundDomains = false;
  tat_maxRadius = 10;
  tat_minRadius = 3;
  tat_curve = shape.curveLinear;
  tat_colorScheme = {
    domain: [
      '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
    ]
  };
  tat_schemeType = 'ordinal';
  tat_rangeFillOpacity = 0.15;
  tat_autoScale = true;
  tat_timeline = false;

  //--------------------------------------------------------------------------

  // MATURIDADE: "Maturidade"
  mat_showLegend = false;
  m1showXAxisLabel = false;
  mat_tooltipDisabled = false;
  m1xAxisLabel = 'Dimensão';
  m1showYAxisLabel = false;
  mat_colorScheme = {
    domain: [
    '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
    ]
  };
  mat_margin = true;
  mat_marginTop = 60;
  mat_marginRight = 60;
  mat_marginBottom = 20;
  mat_marginLeft = 60;
  mat_gaugeMin = 0;
  mat_gaugeMax = 36;
  mat_gaugeLargeSegments = 36;
  mat_gaugeSmallSegments = 1;
  mat_gaugeTextValue = '';
  mat_gaugeUnits = '';
  mat_gaugeAngleSpan = 240;
  mat_gaugeStartAngle = -120;
  mat_gaugeShowAxis = true;
  colorScheme = {
    domain: [
      '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
    ]
  };

  //--------------------------------------------------------------------------

  // CLIMA: "Termômetro"
  ter_showXAxis = true;
  ter_showYAxis = true;
  ter_gradient = false;
  ter_showLegend = false;
  ter_showXAxisLabel = true;
  ter_tooltipDisabled = false;
  ter_xAxisLabel = 'Sprint';
  ter_showYAxisLabel = true;
  ter_yAxisLabel = 'Graus';
  ter_showGridLines = true;
  ter_barPadding = 10;
  ter_roundDomains = false;
  ter_schemeType = 'ordinal';
  ter_colorScheme = {
    domain: [
      '#0099cc', '#2ECC71', '#4cc3d9'
    ]
  };

  // CONSTRUTOR
  constructor() {
    Object.assign(this, {
      atingimentoMetas, qualidade,
      custoPf, produtividade, txEntrega, velocidade, tmpAtendimento, eficiencia,
      satisfacaoUsuario, expectativaValor,
      maturidade,
      termometro,
      multi, consolidado
    });
    this.dateData = generateData(5, false);
    this.dateDataWithRange = generateData(2, true);
  }

  get dateDataWithOrWithoutRange() {
    if (this.range) {
      return this.dateDataWithRange;
    } else {
      return this.multi;
    }

  }

  select(data) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'bar') {
      $event.preventDefault();
    }
  }

}
