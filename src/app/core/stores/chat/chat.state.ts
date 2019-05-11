import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RootState } from '..';

export interface ChatState {
    currentChatId: string;
    chatIdList: string[];
}

export const initialChatState = {
    currentChatId: '',
    chatIdList: ['GeneralChatRoon']
};

export const ChatFeatureSelector = ((rootState: RootState) => rootState.chat);
export const CurrentChatIdSelector = createSelector(
    ChatFeatureSelector,
    (state: ChatState) => state.currentChatId
);
export const ChatIdListSelector = createSelector(
    ChatFeatureSelector,
    (state: ChatState) => state.chatIdList
);
