import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AuthLayoutComponent,
  children: [{
             path: '',
             loadChildren: './authentication/authentication.module#AuthenticationModule'
            }, {
             path: 'signup',
             loadChildren: './authentication/authentication.module#AuthenticationModule'
            }, {
             path: 'forgot',
             loadChildren: './authentication/authentication.module#AuthenticationModule'
            }, {
             path: 'error',
             loadChildren: './error/error.module#ErrorModule'
            }]
  },{
  path: '',
  component: AdminLayoutComponent,
  children: [{
              path: 'dashboard',
              loadChildren: './dashboard/dashboard.module#DashboardModule'
            }, {
              path: 'dashboard-empresa',
              loadChildren: './dashboard-empresa/dashboard-empresa.module#DashboardEmpresaModule'
            }, {
              path: 'dashboard-portfolio',
              loadChildren: './dashboard-portfolio/dashboard-portfolio.module#DashboardPortfolioModule'
            }, {
              path: 'dashboard-time',
              loadChildren: './dashboard-time/dashboard-time.module#DashboardTimeModule'
            }, {
              path: 'news',
              loadChildren: './news/news.module#NewsModule'
            }, {
              path: 'components',
              loadChildren: './components/components.module#ComponentsModule'
            }, {
              path: 'cadastros',
              loadChildren: './cadastros/cadastros.module#CadastrosModule'
            }, {
              path: 'dados',
              loadChildren: './dados/dados.module#DadosModule'
            }, {
              path: 'datatable',
              loadChildren: './datatable/datatable.module#DatatableModule'
            }, {
              path: 'charts',
              loadChildren: './charts/charts.module#ChartsModule'
            }, {
              path: 'pages',
              loadChildren: './pages/pages.module#PagesModule'
            }, {
              path: 'info',
              loadChildren: './info/info.module#InfoModule'
            }, {
              path: 'configs',
              loadChildren: './configs/configs.module#ConfigsModule'
            }, {
              path: 'kpis',
              loadChildren: './kpis/kpis.module#KpisModule'
            }, {
              path: 'docs',
              loadChildren: './docs/docs.module#DocsModule'
            }]
  },  {
    path: '**',
    redirectTo: 'error/404'
  }];
