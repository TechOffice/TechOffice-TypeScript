
# Actions
Actions are the information that send data from your application to store

# Action Creators 
Action Creator are functions that create action.

```
function addToDo(test) {
	return {
		type: ADD_TODO,
		text
	}
}
const boundAddToDo = text => dispatch(addToDo(test));

```


```
boundAddToDo(test)

```

# Reducers
Reducers describe how the application's state change in response.
It is a function that is response for receiving action and processing state.
```
function(state = 0, action){

}

```

e.g.

```
function counter(state = 0, action){
	switch(action.type){
		case 'INCREMENT':
			return state + 1;
		default:
			return state;
	}
}
```

# Store
Store is an object which bring Action and Reducers together.

```
let store = createStore(counter);
```

Operation on the store
```
console.log(store.getState());

store.dispatch({
  type: 'INCREMENT'
});

console.log(store.getState());

```

# React Integration
Redux provide a HOC function which can be used to integrate store with React. i.e. connect();
To use connect(), it requires two functions that transform store state and store dispatch into props that pass to React Component.

**Transform Store State into Prop**
```
const mapStateToProps = function(state){
	return {
		todos: state.todos
	};
};
```

** Transform Dispatch into Prop**
```
const mapDispatchToProps = function(dispatch){
	return {
		onTodoClick: function(id){
			dispatch(toggleTodo(id))
		}
	};
};


```
connect(mapStateToProps, mapDispatchToProps)(<React Component>);
```



