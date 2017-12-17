import { Routes } from '@angular/router';

import { DashboardPortfolioDesempenhoComponent } from './desempenho/dashboard-portfolio-desempenho.component';
import { DashboardPortfolioDiagnosticoComponent } from './diagnostico/dashboard-portfolio-diagnostico.component';
import { DashboardPortfolioProgressoComponent } from './progresso/dashboard-portfolio-progresso.component';

export const DashboardPortfolioRoutes: Routes = [{
  path: '',
  children: [{
    path: '',
    redirectTo: 'diagnostico'
  }, {
    path: 'diagnostico',
    component: DashboardPortfolioDiagnosticoComponent,
    data: {
      heading: 'Painel do PORTFÓLIO: Diagnóstico'
    }
  }, {
    path: 'progresso',
    component: DashboardPortfolioProgressoComponent,
    data: {
      heading: 'Painel do PORTFÓLIO: Progresso'
    }
  }, {
    path: 'desempenho',
    component: DashboardPortfolioDesempenhoComponent,
    data: {
      heading: 'Painel do PORTFÓLIO: Desempenho'
    }
  }]
}
];
