import {ActionType, StateType} from 'typesafe-actions'

declare module 'MyTypes' {
    export type Store = StateType<typeof import('./index').default>;
    export type RootAction = ActionType<typeof import('./root-action').default>;
    export type RootState = StateType<typeof import('./root-reducer').default>;
}
