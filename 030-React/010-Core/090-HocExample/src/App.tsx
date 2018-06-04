import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component<any, any>{
    
    render(){
        return (
            <div>
                <h1>Hello World</h1>
            </div>            
        )
    }

}

function wrap(Element){
    return class extends React.Component {
        render() {
            return (
                <div>
                    <div>Before</div>
                    <Element/>
                    <div>Before</div>
                </div>
            );
        }
    };
}

const WrapElement = wrap(App);

ReactDOM.render(<WrapElement/>, document.getElementById('app'));

    
