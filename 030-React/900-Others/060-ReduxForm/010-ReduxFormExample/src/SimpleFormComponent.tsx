import * as React from 'react';
import { Dispatch } from 'redux';
import { Field, reduxForm, FormProps, FormErrors, InjectedFormProps } from 'redux-form';

class SimpleFormComponent extends React.Component<InjectedFormProps , any >{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <form >
                <Field name="firstName" component="input" type="text" />
            </form>
        );
    }
}

export default reduxForm({form : 'simple'})(SimpleFormComponent);


