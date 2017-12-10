import { Routes } from '@angular/router';

import { DashboardEmpresaComponent } from './dashboard-empresa.component';

export const DashboardEmpresaRoutes: Routes = [{
  path: '',
  component: DashboardEmpresaComponent,
  data: {
    heading: 'Painel da EMPRESA'
  }
}];
