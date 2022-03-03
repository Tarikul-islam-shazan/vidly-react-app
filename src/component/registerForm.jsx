import React, { Component } from "react";
import Joi from 'joi-browser';
import Input from "./common/input";
class RegisterForm extends Component {
    state = {
        account : { username: '', password: '', name: ''},
        errors: {}
    } 

    schema = {
        username: Joi.string().required().email().label("Username"), 
        password: Joi.string().required().min(5).label("Password"), 
        name: Joi.string().required().label("Name"), 
    }

    validateProperty = ({name, value})=> {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }

    validate = () => {
        const options = { abortEarly: false};
        const { error } = Joi.validate(this.state.account, this.schema, options);
        
        if(!error) return null;

        const errors = {};
        for(let item of error.details) {
            errors[item.path[0]] = item.message; 
        }
        return errors;
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if(errors) return;

        console.log('submitted');
    }

    handleChange = ({ currentTarget: input}) => {
        const errors = {...this.state.errors};
        console.log(errors)
        const errorMessage= this.validateProperty(input);
        if(errorMessage) errors[input.name]= errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;

        this.setState({account, errors})
    }

    render() { 
        const { account, errors } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                
                <Input
                    id="username"
                    name="username"
                    type="text"
                    label="Username"
                    value={account.username}
                    onChange={this.handleChange}
                    error={errors.username}
                />

                <Input
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    value={account.password}
                    onChange={this.handleChange}
                    error={errors.password}
                />

                <Input
                    id="name"
                    name="name"
                    type="text"
                    label="Name"
                    value={account.name}
                    onChange={this.handleChange}
                    error={errors.name}
                />
            
                <button 
                    type="submit" 
                    disabled= {this.validate()}
                    className="btn btn-primary">
                        Submit
                </button>
            </form>
        );
    }
}
 
export default RegisterForm;