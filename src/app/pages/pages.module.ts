import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PagesRoutes } from './pages.routing';
import { OsComponent } from './os/os.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PlanosComponent } from './planos/planos.component';
import { ForumComponent } from './forum/forum.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes)
  ],
  declarations: [OsComponent, TimelineComponent, PlanosComponent, ForumComponent]
})

export class PagesModule {}
