import { Routes } from '@angular/router';

import { MuralComponent } from './mural/mural.component';
import { DocsComponent } from './docs/docs.component';
import { BoletinsComponent } from './boletins/boletins.component';
import { LinksComponent } from './links/links.component';

export const InfoRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'mural',
      component: MuralComponent,
      data: {
        heading: 'Mural'
      }
    },{
      path: 'docs',
      component: DocsComponent,
      data: {
        heading: 'Documentos'
      }
    },{
      path: 'boletins',
      component: BoletinsComponent,
      data: {
        heading: 'Boletins'
      }
    },{
      path: 'links',
      component: LinksComponent,
      data: {
        heading: 'Links'
      }
    }]
  }
];
