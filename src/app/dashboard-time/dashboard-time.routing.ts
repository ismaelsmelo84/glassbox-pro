import { Routes } from '@angular/router';

import { DashboardTimeComponent } from './dashboard-time.component';

export const DashboardTimeRoutes: Routes = [{
  path: '',
  component: DashboardTimeComponent,
  data: {
    heading: 'Painel do Time'
  }
}];
