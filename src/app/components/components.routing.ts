import { Routes } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';
import { PopoverComponent } from './popover/popover.component';
import { RatingComponent } from './rating/rating.component';
import { TabsComponent } from './tabs/tabs.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

export const ComponentsRoutes: Routes = [
    {
      path: 'progress',
      component: ProgressComponent,
      data: {
        heading: 'Progress bars'
      }
    }, {
      path: 'carousel',
      component: CarouselComponent,
      data: {
        heading: 'Carousel'
      }
    }, {
      path: 'modal',
      component: ModalComponent,
      data: {
        heading: 'Modal'
      }
    }, {
      path: 'popover',
      component: PopoverComponent,
      data: {
        heading: 'Popovers'
      }
    }, {
      path: 'rating',
      component: RatingComponent,
      data: {
        heading: 'Rating'
      }
    }, {
      path: 'tabs',
      component: TabsComponent,
      data: {
        heading: 'Tabs'
      }
    }, {
      path: 'typeahead',
      component: TypeaheadComponent,
      data: {
        heading: 'Typeahead'
      }
    }
  ];
