import { Routes } from '@angular/router';

import { PortfoliosComponent } from './portfolios/portfolios.component';
import { TargetsComponent } from './targets/targets.component';
import { TimesComponent } from './times/times.component';
import { SistemasComponent } from './sistemas/sistemas.component';

export const CadastrosRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'portfolios',
      component: PortfoliosComponent,
      data: {
        heading: 'Cadastro de PORTFÓLIOS'
      }
    }, {
      path: 'targets',
      component: TargetsComponent,
      data: {
        heading: 'Cadastro de TARGETS'
      }
    }, {
      path: 'times',
      component: TimesComponent,
      data: {
        heading: 'Cadastro de TIMES'
      }
    }, {
      path: 'sistemas',
      component: SistemasComponent,
      data: {
        heading: 'Cadastro de SISTEMAS'
      }
    }]
  }
];
