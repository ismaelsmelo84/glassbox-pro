import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'dashboard',
    name: 'HOME',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
    state: 'dashboard-empresa',
    name: 'EMPRESAS',
    type: 'link',
    icon: 'weather-wind-s'
  },
  {
    state: 'dashboard-portfolio',
    name: 'PORTFOLIO',
    type: 'link',
    icon: 'basic-folder-multiple'
  },
  {
    state: 'dashboard-time',
    name: 'EQUIPES',
    type: 'link',
    icon: 'ecommerce-money'
  },
  {
    state: 'dados',
    name: 'DADOS',
    type: 'sub',
    icon: 'arrows-sign-right',
    badge: [
      {
        type: 'buttons',
        value: 'INFORMAR'
      }
    ],
    children: [
      {
        state: 'taskboard',
        name: 'TASKBOARD'
      },      {
        state: 'estimativa',
        name: 'ESTIMATIVA'
      },
      {
        state: 'medicao',
        name: 'MEDICAO'
      },
      {
        state: 'outros',
        name: 'OUTROS'
      }
    ]
  },
  {
    state: 'kpis',
    name: 'KPIS',
    type: 'link',
    icon: 'ecommerce-graph3'
  },
  {
    state: 'news',
    name: 'NEWS',
    type: 'link',
    icon: 'basic-paperplane',
    badge: [
      {
        type: 'info',
        value: '2'
      }
    ],
  },
  {
    state: 'info',
    name: 'INFOS',
    type: 'sub',
    icon: 'basic-todo-txt',
    children: [
      {
        state: 'mural',
        name: 'MURAL'
      },{
        state: 'documentos',
        name: 'DOCUMENTOS'
      },{
        state: 'boletins',
        name: 'BOLETINS'
      },{
        state: 'links',
        name: 'LINKS'
      }
    ]
  },
  {
    state: 'cadastros',
    name: 'CADASTROS',
    type: 'sub',
    icon: 'basic-book-pencil',
    children: [
      {
        state: 'portfolios',
        name: 'PORTFOLIOS'
      },
      {
        state: 'targets',
        name: 'TARGETS'
      },
      {
        state: 'times',
        name: 'EQUIPES'
      },
      {
        state: 'sistemas',
        name: 'SISTEMAS'
      }
    ]
  },
  {
    state: 'configs',
    name: 'CONFIGURACOES',
    type: 'sub',
    icon: 'basic-settings',
    children: [
      {
        state: 'params',
        name: 'PARAMETROS'
      },
      {
        state: 'users',
        name: 'USUARIOS'
      }
    ]
  },
  {
    state: 'docs',
    name: 'DOCUMENTACAO',
    type: 'link',
    icon: 'basic-sheet-txt'
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
