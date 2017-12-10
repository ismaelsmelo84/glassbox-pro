import { Routes } from '@angular/router';

import { TaskboardComponent } from './taskboard/taskboard.component';
import { EstimativaComponent } from './estimativa/estimativa.component';
import { MedicaoComponent } from './medicao/medicao.component';
import { OutrosComponent } from './outros/outros.component';

export const DadosRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'taskboard',
      component: TaskboardComponent,
      data: {
        heading: 'TASKBOARD'
      }
    }, {
      path: 'estimativa',
      component: EstimativaComponent,
      data: {
        heading: 'Informar ESTIMATIVA'
      }
    }, {
      path: 'medicao',
      component: MedicaoComponent,
      data: {
        heading: 'Informar MEDIÇÃO'
      }
    }, {
      path: 'outros',
      component: OutrosComponent,
      data: {
        heading: 'Informar OUTROS'
      }
    }]
  }
];
