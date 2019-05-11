import {
  ActionReducerMap
} from '@ngrx/store';
import * as fromChatReducer from './chat/chat.reducer';
import { ChatState } from './chat/chat.state';

export interface RootState {
  chat: ChatState;
}

export const RootReducers: ActionReducerMap<RootState> = {
  chat: fromChatReducer.chatReducer
};

