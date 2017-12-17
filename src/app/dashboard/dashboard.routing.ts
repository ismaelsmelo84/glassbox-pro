import { Routes } from '@angular/router';

import { DashboardAgilegovComponent } from './agilegov/dashboard-agilegov.component';
import { DashboardCioComponent } from './cio/dashboard-cio.component';
import { DashboardHrComponent } from './hr/dashboard-hr.component';
import { DashboardPmoComponent } from './pmo/dashboard-pmo.component';
import { DashboardSourcingComponent } from './sourcing/dashboard-sourcing.component';

export const DashboardRoutes: Routes = [{
path: '',
children: [{
  path: '',
  redirectTo: 'agilegov'
}, {
  path: 'agilegov',
  component: DashboardAgilegovComponent,
  data: {
    heading: 'Principal: Governança Ágil'
  }
}, {
  path: 'cio',
  component: DashboardCioComponent,
  data: {
    heading: 'Principal: Office do CIO'
  }
}, {
  path: 'pmo',
  component: DashboardPmoComponent,
  data: {
    heading: 'Principal: PMO'
  }
}, {
  path: 'hr',
  component: DashboardHrComponent,
  data: {
    heading: 'Principal: HR'
  }
}, {
  path: 'sourcing',
  component: DashboardSourcingComponent,
  data: {
    heading: 'Principal: Sourcing'
  }
}]
}
];
