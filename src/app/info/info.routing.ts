import { Routes } from '@angular/router';

import { MuralComponent } from './mural/mural.component';
import { DocumentosComponent } from './documentos/documentos.component';
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
      path: 'documentos',
      component: DocumentosComponent,
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
