import { Routes } from '@angular/router';

import { DashboardPortfolioComponent } from './dashboard-portfolio.component';

export const DashboardPortfolioRoutes: Routes = [{
  path: '',
  component: DashboardPortfolioComponent,
  data: {
    heading: 'Painel do Portfólio'
  }
}];
