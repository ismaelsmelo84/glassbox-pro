import {
  Component,
  OnInit,
  AfterContentInit
} from '@angular/core';
import { Message } from './message';
import { NewsService } from './news.service';
import * as Quill from 'quill';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [NewsService]
})

export class NewsComponent implements OnInit, AfterContentInit {
  messages: Message[];
  selectedMessage: Message;
  messageOpen = false;
  isOpened = true;
  _autoCollapseWidth = 991;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    if (this.isOver()) {
      this.isOpened = false;
    }
    this.getMessages();
  }

  ngAfterContentInit() {
    const quill = new Quill('#editor-container', {
      modules: {
        toolbar: {
          container: '#toolbar-toolbar'
        }
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    });
  }

  toogleSidebar(): void {
    this.isOpened = !this.isOpened;
  }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 991px)`).matches;
  }

  getMessages(): void {
    this.newsService.getMessages().then(messages => {
      this.messages = messages;
      this.selectedMessage = this.messages[1];
    });
  }

  onSelect(message: Message): void {
    this.selectedMessage = message;
    if (this.isOver()) {
      this.isOpened = false;
    }
  }
}
