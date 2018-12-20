import * as React from 'react';
import { Field, reduxForm, FormProps, FormErrors, InjectedFormProps } from 'redux-form';
import TextField from './TextField';
import { connect } from 'react-redux';

@(connect( 
    // map state to props
    function(state: any){
        console.log(state);
        return {simple: state && state.form && state.form.simple && state.form.simple.values ? state.form.simple.values : {} };
    } ,
    // map dispatch to props
    function(dispatch){
        return {};
    }    
) as any)
@(reduxForm({form : 'simple'}) as any)
export default class SimpleFormComponent extends React.Component<InjectedFormProps | any , any >{

    constructor(props){
        super(props);
        this.state = props;
    }

    render(){
        return (
            <form >
                <Field name="firstName" component={TextField}/>
                <div>
                    {this.props.simple.firstName}
                </div>
            </form>
        );
    }
}



