import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardPortfolioComponent } from './dashboard-portfolio.component';
import { DashboardPortfolioRoutes } from './dashboard-portfolio.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(DashboardPortfolioRoutes), NgxChartsModule],
  declarations: [DashboardPortfolioComponent]
})

export class DashboardPortfolioModule {}
