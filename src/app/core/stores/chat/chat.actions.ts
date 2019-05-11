import { Action } from '@ngrx/store';

export enum ChatActionTypes {
    SetCurrentChatId = '[Chat] ChatId'
}
export class SetCurrentChatId implements Action {
    readonly type = ChatActionTypes.SetCurrentChatId;
    constructor(public payload: string) {}
}

export type ChatActions = SetCurrentChatId;
