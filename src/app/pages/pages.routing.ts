import { Routes } from '@angular/router';

import { OsComponent } from './os/os.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PlanosComponent } from './planos/planos.component';
import { ForumComponent } from './forum/forum.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'os',
      component: OsComponent,
      data: {
        heading: 'Ordem de Serviço'
      }
    }, {
      path: 'forum',
      component: ForumComponent,
      data: {
        heading: 'Forum'
      }
    }, {
      path: 'timeline',
      component: TimelineComponent,
      data: {
        heading: 'Timeline'
      }
    }, {
      path: 'planos',
      component: PlanosComponent,
      data: {
        heading: 'Escolha um PLANO'
      }
    }]
  }
];
