import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardEmpresaDiagnosticoComponent } from './diagnostico/dashboard-empresa-diagnostico.component';
import { DashboardEmpresaProgressoComponent } from './progresso/dashboard-empresa-progresso.component';
import { DashboardEmpresaDesempenhoComponent } from './desempenho/dashboard-empresa-desempenho.component';
import { DashboardEmpresaRoutes } from './dashboard-empresa.routing';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [CommonModule,
            ChartsModule,
            RouterModule.forChild(DashboardEmpresaRoutes),
            NgxChartsModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule],
  declarations: [ DashboardEmpresaDiagnosticoComponent,
                  DashboardEmpresaProgressoComponent,
                  DashboardEmpresaDesempenhoComponent]
})

export class DashboardEmpresaModule {}
