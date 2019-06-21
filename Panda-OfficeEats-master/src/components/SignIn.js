import React,{Component} from 'react'
//import { connect } from "react-redux";
//import RestaurantsInfo from "./SearchCriteria";
import SuccessMessage from "./SuccessMessage"
import { Form, Button}        from 'react-bootstrap'
//import SignUp from '../components/SignUp';
import * as fetchAction  from '../actions/fetchAction';
import { bindActionCreators } from 'redux';


import saveUser from "../actions/fetchAction";
import RegistrationEmail from "./signupForm/RegistrationEmail";
import RegistrationPass from "./signupForm/RegistrationPass";
import RegistrationPassRetype from "./signupForm/RegistrationPassRetype";

import {connect} from "react-redux";
import {signinUser} from "../actions/fetchAction";
import {navHome} from "../actions/fetchAction";


export class SignIn extends Component{

    submitForm = (e) => {
        e.preventDefault();
        const email = this.getEmail.value;
        const password = this.getPassword.value;

        this.props.dispatch(signinUser(email, password));
    };

    home = (e) => {
        this.props.dispatch(navHome());
    }

    render() {

        return(
            <div className="s014">
                <legend><div className={"SignInTitle"}>Sign-In
                    <Button className={"HomeBtn"}
                            onClick={this.home}
                        // className="btn btn-info Home"
                            type="Home">Home
                    </Button>
                </div>
                </legend>

                <Form onSubmit={this.submitForm} className = "form-signin" >

                        <div className={"email"}>
                            <input className={"signin"}
                                   type="text"
                                   placeholder="Email"
                                   required
                                   ref={input => this.getEmail = input }/>
                        </div>
                        <br />
                        <div className={"password "}>
                            <input className={"signin"}
                                   type="password"
                                   placeholder="Password"
                                   required
                                   ref={input => this.getPassword = input }/>
                        </div>
                    <br/>

                    <div className="registration-buttons">
                        <Button
                            className="btn btn-info submit1"
                            type="submit">Submit
                        </Button>
                        <input
                            type='reset'
                            value='Clear'
                            className="btn btn-outline-primary">
                        </input>
                    </div>

                </Form>

            </div>
        );
    }
}

function mapStateToProps(storeState, componentProps) {
    const { userSignup } = storeState;
    return { userSignup };
}

export default connect(mapStateToProps)(SignIn);