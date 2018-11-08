import * as React from 'react';
import { Dispatch } from 'redux';
import { Field, reduxForm, FormProps, FormErrors, InjectedFormProps } from 'redux-form';
import TextField from "@material-ui/core/TextField";

@(reduxForm({form : 'simple'}) as any)
export default class SimpleFormComponent extends React.Component<InjectedFormProps | {} , any >{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <form >
                <Field name="firstName" component={(field)=><TextField {...field.input}/>}/>
            </form>
        );
    }
}



