import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from './services/chat/chat.service';
import { Observable } from 'rxjs';
import { Message } from 'src/app/core/domain/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService]
})
export class ChatComponent {
  currentChatId: string;
  username: string;
  body: string;
  messages$: Observable<Message[]>;
  roomList$: Observable<string[]>;

  constructor(private chatService: ChatService) {
    this.roomList$ = this.chatService.getRooms();
    this.messages$ = this.chatService.getChat();
  }

  public send() {
    this.chatService.sendMessage(this.currentChatId, { username: this.username, body: this.body });
    this.body = '';
  }
  public setCurrentChatId() {
    this.chatService.setChatId(this.currentChatId);
  }
}
