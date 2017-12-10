import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { TreeModule } from 'angular-tree-component';
import { CustomFormsModule } from 'ng2-validation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { CadastrosRoutes } from './cadastros.routing';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { TargetsComponent } from './targets/targets.component';
import { TimesComponent } from './times/times.component';
import { SistemasComponent } from './sistemas/sistemas.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CadastrosRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    CustomFormsModule,
    TextMaskModule,
  ],
  declarations: [PortfoliosComponent, TargetsComponent, TimesComponent, SistemasComponent]
})

export class CadastrosModule {}
