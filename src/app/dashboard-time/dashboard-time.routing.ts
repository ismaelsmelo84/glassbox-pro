import { Routes } from '@angular/router';

import { DashboardTimeDiagnosticoComponent } from './diagnostico/dashboard-time-diagnostico.component';
import { DashboardTimeProgressoComponent } from './progresso/dashboard-time-progresso.component';
import { DashboardTimeDesempenhoComponent } from './desempenho/dashboard-time-desempenho.component';

export const DashboardTimeRoutes: Routes = [{
    path: '',
    children: [{
      path: '',
      redirectTo: 'diagnostico'
    }, {
      path: 'diagnostico',
      component: DashboardTimeDiagnosticoComponent,
      data: {
        heading: 'Painel do TIME: Diagnóstico'
      }
    }, {
      path: 'progresso',
      component: DashboardTimeProgressoComponent,
      data: {
        heading: 'Painel do TIME: Progresso'
      }
    }, {
      path: 'desempenho',
      component: DashboardTimeDesempenhoComponent,
      data: {
        heading: 'Painel do TIME: Desempenho'
      }
    }]
  }
];
