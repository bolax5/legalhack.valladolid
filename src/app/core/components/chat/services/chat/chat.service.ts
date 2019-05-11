import { Injectable } from '@angular/core';
import { HttpDataService } from 'src/app/core/services/http-data-service/http-data-service.service';
import { Message } from 'src/app/core/domain/message';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/core/stores';
import { ChatIdListSelector, CurrentChatIdSelector } from 'src/app/core/stores/chat/chat.state';
import { switchMap } from 'rxjs/operators';
import { SetCurrentChatId } from 'src/app/core/stores/chat/chat.actions';
import { Observable } from 'rxjs';

@Injectable()
export class ChatService {


  constructor(private http: HttpDataService, private store: Store<RootState>) { }

  sendMessage(roomId: string, message: Message) {
    this.http.firePushItem(`chatRoom/${roomId}`, message);
  }
  getChat() {
    return this.store.select(CurrentChatIdSelector).pipe(
      switchMap((currentChatId) => {
        return this.http.fireGetList(`chatRoom/${currentChatId}`);
      })
    );
  }
  setChatId(chatId: string) {
    this.store.dispatch(new SetCurrentChatId(chatId));
  }
  getRooms(): Observable<string[]> {
    return this.store.select(ChatIdListSelector);
  }

}
