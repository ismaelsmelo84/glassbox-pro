import { Routes } from '@angular/router';

import { KpisComponent } from './kpis.component';

export const KpisRoutes: Routes = [{
  path: '',
  component: KpisComponent,
  data: {
    heading: 'KPIs'
  }
}];
