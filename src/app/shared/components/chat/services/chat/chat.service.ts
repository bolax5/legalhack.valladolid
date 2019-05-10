import { Injectable } from '@angular/core';
import { HttpDataService } from 'src/app/core/services/http-data-service/http-data-service.service';
import { Message } from 'src/app/core/domain/message';

@Injectable()
export class ChatService {

  constructor(private http: HttpDataService) { }

  sendMessage(roomId: string, message: Message) {
    this.http.firePushItem(`chatRoom/${roomId}`, message);
  }
  getChat(roomId: string) {
    return this.http.fireGetList(`chatRoom/${roomId}`);
  }


}
