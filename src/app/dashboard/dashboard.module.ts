import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardAgilegovComponent } from './agilegov/dashboard-agilegov.component';
import { DashboardCioComponent } from './cio/dashboard-cio.component';
import { DashboardHrComponent } from './hr/dashboard-hr.component';
import { DashboardPmoComponent } from './pmo/dashboard-pmo.component';
import { DashboardSourcingComponent } from './sourcing/dashboard-sourcing.component';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(DashboardRoutes), NgxChartsModule],
  declarations: [DashboardAgilegovComponent,
                 DashboardCioComponent,
                 DashboardHrComponent,
                 DashboardPmoComponent,
                 DashboardSourcingComponent]
})

export class DashboardModule {}
