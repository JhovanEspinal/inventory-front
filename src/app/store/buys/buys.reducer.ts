import { Action, createReducer } from "@ngrx/store"

export interface BuysState {

}

export const buysInitialState: BuysState = {

}

export const _buysReducer = createReducer(
    buysInitialState,
)

export function buysReducer(state: BuysState | undefined, action: Action) {
    return _buysReducer(state, action);
  }