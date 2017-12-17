import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { InfoRoutes } from './info.routing';
import { MuralComponent } from './mural/mural.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { BoletinsComponent } from './boletins/boletins.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(InfoRoutes),
    DragulaModule,
    NgbTooltipModule
  ],
  declarations: [MuralComponent, DocumentosComponent, BoletinsComponent, LinksComponent]
})

export class InfoModule {}
