import { Routes } from '@angular/router';

import { DashboardEmpresaDiagnosticoComponent } from './diagnostico/dashboard-empresa-diagnostico.component';
import { DashboardEmpresaProgressoComponent } from './progresso/dashboard-empresa-progresso.component';
import { DashboardEmpresaDesempenhoComponent } from './desempenho/dashboard-empresa-desempenho.component';

export const DashboardEmpresaRoutes: Routes = [{
    path: '',
    children: [{
      path: '',
      redirectTo: 'diagnostico'
    }, {
      path: 'diagnostico',
      component: DashboardEmpresaDiagnosticoComponent,
      data: {
        heading: 'Painel da EMPRESA: Diagnóstico'
      }
    }, {
      path: 'progresso',
      component: DashboardEmpresaProgressoComponent,
      data: {
        heading: 'Painel da EMPRESA: Progresso'
      }
    }, {
      path: 'desempenho',
      component: DashboardEmpresaDesempenhoComponent,
      data: {
        heading: 'Painel da EMPRESA: Desempenho'
      }
    }]
  }
];
