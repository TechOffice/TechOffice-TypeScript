import { ActionKey } from "./ActionKey";

export interface IncreaseCounterAction {
    type: ActionKey.INCREASE_COUNTER,
    n: number
}