import { Injectable } from '@angular/core';
import { HttpDataService } from 'src/app/core/services/http-data-service/http-data-service.service';
import { mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/core/stores';
import { SetCurrentChatId } from 'src/app/core/stores/chat/chat.actions';

@Injectable()
export class RoomService {

  constructor(private http: HttpDataService, private store: Store<RootState>) { }

  public getRoomList() {
    return this.http.httpGet('room');
  }
  public getDocumentVersions(roomId: string) {
    return this.http.fireGetList(`document/${roomId}`);
  }
  public getDocument(roomId: string, version?: string) {
    return this.http.httpGet(`room/${roomId}/document`, {version});
  }

  public setRoomChat(id: string): any {
    this.store.dispatch(new SetCurrentChatId(`Sala ${id}`));
  }
}
