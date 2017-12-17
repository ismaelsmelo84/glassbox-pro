import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardPortfolioDiagnosticoComponent } from './diagnostico/dashboard-portfolio-diagnostico.component';
import { DashboardPortfolioProgressoComponent } from './progresso/dashboard-portfolio-progresso.component';
import { DashboardPortfolioDesempenhoComponent } from './desempenho/dashboard-portfolio-desempenho.component';
import { DashboardPortfolioRoutes } from './dashboard-portfolio.routing';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [CommonModule,
            ChartsModule,
            RouterModule.forChild(DashboardPortfolioRoutes),
            NgxChartsModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule],
  declarations: [ DashboardPortfolioDiagnosticoComponent,
                  DashboardPortfolioProgressoComponent,
                  DashboardPortfolioDesempenhoComponent]
})

export class DashboardPortfolioModule {}
