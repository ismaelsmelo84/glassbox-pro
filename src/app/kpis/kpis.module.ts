import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { KpisComponent } from './kpis.component';
import { KpisRoutes } from './kpis.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(KpisRoutes)],
  declarations: [KpisComponent]
})

export class KpisModule {}
