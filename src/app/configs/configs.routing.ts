import { Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { ParamsComponent } from './params/params.component';

export const ConfigsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'users',
      component: UsersComponent,
      data: {
        heading: 'Cadastro de USUÁRIOS'
      }
    }, {
      path: 'params',
      component: ParamsComponent,
      data: {
        heading: 'Atualiza PARÂMETROS'
      }
    }]
  }
];
