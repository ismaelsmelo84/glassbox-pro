import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ConfigsRoutes } from './configs.routing';
import { UsersComponent } from './users/users.component';
import { ParamsComponent } from './params/params.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ConfigsRoutes),
    NgbTooltipModule,
    NgxDatatableModule
  ],
  declarations: [
    UsersComponent,
    ParamsComponent
  ]
})

export class ConfigsModule {}
