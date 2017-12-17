import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardTimeDiagnosticoComponent } from './diagnostico/dashboard-time-diagnostico.component';
import { DashboardTimeProgressoComponent } from './progresso/dashboard-time-progresso.component';
import { DashboardTimeDesempenhoComponent } from './desempenho/dashboard-time-desempenho.component';
import { DashboardTimeRoutes } from './dashboard-time.routing';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [CommonModule,
            ChartsModule,
            RouterModule.forChild(DashboardTimeRoutes),
            NgxChartsModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule],
  declarations: [ DashboardTimeDiagnosticoComponent,
                  DashboardTimeProgressoComponent,
                  DashboardTimeDesempenhoComponent]
})

export class DashboardTimeModule {}
