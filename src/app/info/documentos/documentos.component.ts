import { Component } from '@angular/core';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent {

  images: any[] = [];
  num = 1;

  constructor() {
    for (this.num; this.num <= 21; this.num += 1) {
      this.images.push(this.num);
    }
  }
}
