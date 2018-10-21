import { DecreaseCounterAction } from "./DecreaseCounterAction";
import { IncreaseCounterAction } from "./IncreaseCounterAction";

export type Action = DecreaseCounterAction
    | IncreaseCounterAction;            