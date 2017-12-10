import { Component } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent {

  images: any[] = [];
  num = 1;

  constructor() {
    for (this.num; this.num <= 21; this.num += 1) {
      this.images.push(this.num);
    }
  }
}
