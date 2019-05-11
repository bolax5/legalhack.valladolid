import { ChatActions, ChatActionTypes } from './chat.actions';
import { initialChatState, ChatState } from './chat.state';

export function chatReducer(state = initialChatState, action: ChatActions): ChatState {
    switch (action.type) {
        case ChatActionTypes.SetCurrentChatId: {
            return {
                currentChatId: action.payload,
                chatIdList: !state.chatIdList.some((chatId) => chatId === action.payload) ?
                    [...state.chatIdList, action.payload] : [...state.chatIdList]
                };
        }
        default: {
            return state;
        }
    }
}
