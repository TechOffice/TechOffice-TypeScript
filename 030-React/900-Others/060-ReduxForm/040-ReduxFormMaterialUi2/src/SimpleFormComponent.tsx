import * as React from 'react';
import { Field, reduxForm, FormProps, FormErrors, InjectedFormProps } from 'redux-form';
import TextField from './TextField';
import { connect } from 'react-redux';


@(reduxForm({form : 'simple'}) as any)
export default class SimpleFormComponent extends React.Component<InjectedFormProps | {} , any >{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <form >
                <Field name="firstName" component={TextField}/>
            </form>
        );
    }
}



