export default function(state, action){
    if (action.type == "alert"){
        state.test2 = "test2 alerted";
        alert("Trigger Alert Hello World");
    }
    return state;
}