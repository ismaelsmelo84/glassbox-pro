import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbProgressbarModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardEmpresaComponent } from './dashboard-empresa.component';
import { DashboardEmpresaRoutes } from './dashboard-empresa.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(DashboardEmpresaRoutes), NgxChartsModule, NgbProgressbarModule, NgbTabsetModule],
  declarations: [DashboardEmpresaComponent]
})

export class DashboardEmpresaModule {}
