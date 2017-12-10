import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {

  images: any[] = [];
  images2: any[] = [];
  num = 1;

  constructor() {
    for (this.num; this.num <= 8; this.num += 1) {
      this.images.push(this.num);
    }

    for (this.num; this.num <= 21; this.num += 1) {
      this.images2.push(this.num);
    }
  }

}
