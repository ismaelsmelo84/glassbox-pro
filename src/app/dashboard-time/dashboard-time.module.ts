import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardTimeComponent } from './dashboard-time.component';
import { DashboardTimeRoutes } from './dashboard-time.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(DashboardTimeRoutes), NgxChartsModule],
  declarations: [DashboardTimeComponent]
})

export class DashboardTimeModule {}
