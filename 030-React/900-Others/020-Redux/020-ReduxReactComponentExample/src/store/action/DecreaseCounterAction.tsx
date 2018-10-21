import { ActionKey } from "./ActionKey";


export interface DecreaseCounterAction {
    type: ActionKey.DECREASE_COUNTER,
    n: number
}