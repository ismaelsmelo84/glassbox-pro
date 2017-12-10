import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'ng-sidebar';

import { NewsComponent } from './news.component';
import { NewsRoutes } from './news.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(NewsRoutes), SidebarModule],
  declarations: [NewsComponent]
})

export class NewsModule {}
