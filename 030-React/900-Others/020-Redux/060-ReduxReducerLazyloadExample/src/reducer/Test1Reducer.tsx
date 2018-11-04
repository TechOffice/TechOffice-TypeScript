
export default function(state, action){
    if (action.type == "alert"){
        state.test1 = "test1 alerted";
        alert("Trigger Alert Hello World");
    }
    return state;
}