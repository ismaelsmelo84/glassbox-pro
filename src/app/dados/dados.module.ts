import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { DadosRoutes } from './dados.routing';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { EstimativaComponent } from './estimativa/estimativa.component';
import { MedicaoComponent } from './medicao/medicao.component';
import { OutrosComponent } from './outros/outros.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DadosRoutes),
    DragulaModule
  ],
  declarations: [TaskboardComponent, EstimativaComponent, MedicaoComponent, OutrosComponent]
})

export class DadosModule {}
