import { ActionKey } from "./action/ActionKey";

export const MapDispatchToProps = function(dispatch){
    return {
		onClick: function(n){
			dispatch({
                type: ActionKey.INCREASE_COUNTER,
                n: n
            })
		}
	};
}