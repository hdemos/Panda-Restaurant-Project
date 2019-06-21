import React,{Component} from 'react'
//import { connect } from "react-redux";
//import RestaurantsInfo from "./SearchCriteria";
import SuccessMessage from "./SuccessMessage"
import { Form, Button}        from 'react-bootstrap'
//import SignUp from '../components/SignUp';
import * as fetchAction  from '../actions/fetchAction';
import { bindActionCreators } from 'redux';


import {saveUser, navHome} from "../actions/fetchAction";
import RegistrationEmail from "./signupForm/RegistrationEmail";
import RegistrationPass from "./signupForm/RegistrationPass";
import RegistrationPassRetype from "./signupForm/RegistrationPassRetype";


import {connect} from "react-redux";

function validate(email, password, retypePassword, phone) {
    return {
        email: email.length === 0, //true if email is empty
        password: password.length === 0, //true if password is empty
        retypePassword: retypePassword.length === 0,
        phone: phone.length === 0,
    };
}


export class SignUp extends Component{

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            retypePassword: '',
            phone:'',
            formValid: false,

            touched: {
                email: false,
                password: false,
            },
        };
    }

    handleEmailChange = (evt) => {
        this.setState({ email: evt.target.value });
    }

    handlePasswordChange = (evt) => {
        this.setState({ password: evt.target.value });
    }

    handleRetypePasswordChange = (evt) => {

        this.setState({retypePassword: evt.target.value});

    }

    handlePhoneChange = (evt) => {

        this.setState({phone: evt.target.value});

    }

    handleBlurRetype = (field) => (event) => {

        if (event.target.value !== this.state.password) {


            this.setState({
                touched: { ...this.state.touched, [field]: true },
            });


        }
    }


    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }

    canBeSubmitted() {

        const errors = validate(this.state.email, this.state.password, this.state.retypePassword, this.state.phone);

        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }

    submitForm = (e) => {
        e.preventDefault();
        const firstName = this.getFirstName.value;
        const lastName = this.getLastName.value;
        const phone = this.getPhone.value;
        const email = this.getEmail.value;
        const password = this.getPassword.value;
        const retypePassword = this.getRetypePassword.value;
        const role = ["admin"];
        validate
        this.props.dispatch(saveUser(firstName, lastName, phone, email, password, retypePassword, role));

    };
    updateRegistrationAttributes = (newAttributes) => {
        this.props.actions.updateRegistrationAttributes(newAttributes)
    };

    home = (e) => {
        this.props.dispatch(navHome());
    }


    render() {

        const errors = validate(this.state.email, this.state.password, this.state.retypePassword, this.state.phone);

        const isDisabled = Object.keys(errors).some(x => errors[x]);

        const shouldMarkError = (field) => {

            if(this.state.touched[field])
                var hasError = errors[field];

            const shouldShow = this.state.touched[field];

            if(shouldShow && hasError){
                this.state.errorMessage = 'invalid Email.';
            }else
            if (!this.state.email.endsWith("@cognizant.com")){
                hasError = true;
                this.state.errorMessage = 'Please Enter Email of Congnizant Domain';
            }

            return hasError ? shouldShow : false;
        };

        const shouldMarkErrorPhone = (field) => {

            if(this.state.touched[field])
                var hasError = errors[field];

            const shouldShow = this.state.touched[field];

            if(shouldShow && hasError){
                this.state.errorMessage = 'invalid';
            }else
            if (!this.state.phone.match(/^[0-9]*$/g)){
                hasError = true;
                this.state.errorMessage = 'Please Enter valid phone number, no special characters! xxx xxx xxxx';
            }

            return hasError ? shouldShow : false;
        };

        const shouldMarkErrorPassword = (field) => {

            if(this.state.touched[field])
                var hasError = errors[field];

            const shouldShow = this.state.touched[field];

            if(shouldShow && hasError){
                this.state.errorMessage = 'invalid';
            }else
            if (! this.state.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/g) ){
                hasError = true;
                this.state.errorMessage = 'Password Invalid, must include upper and lowercase, number and special character';
            }

            return hasError ? shouldShow : false;
        };

        const shouldMarkErrorRetype = (field) => {

            if(this.state.touched[field])
                var hasError = errors[field];

            const shouldShow = this.state.touched[field];

            if(shouldShow && hasError){
                this.state.errorMessage = 'invalid';
            }else
            if (!(this.state.retypePassword === this.state.password)){
                hasError = true;
                this.state.errorMessage = "Passwords doesn't match";
            }else
            if (! this.state.retypePassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/g) ){
                hasError = true;
                this.state.errorMessage = 'Password Invalid, must include upper and lowercase, number and special character';
            }

            return hasError ? shouldShow : false;
        };

        return(
            <div className="s014">
                <legend><div className={"SignUpTitle"}>Sign-up
                    <Button className={"HomeBtn"}
                            onClick={this.home}
                        // className="btn btn-info Home"
                        type="Home">Home
                    </Button>
                </div>
                </legend>
                <Form onSubmit={this.submitForm} className = "form-registration" key="registration-form">

                        <div className={"firstName"}>
                            <input className={"firstNameBox registration"}
                                type="text"
                                placeholder="First Name"
                                required
                                   ref={input => this.getFirstName = input }/>
                        </div>
                                <br />
                        <div className={"lastName "}>
                            <input className={"lastNameBox registration"}
                                type="text"
                                placeholder="Last Name"
                                required
                                ref={input => this.getLastName = input }/>
                        </div>
                        <br />
                        <div className={"phone"}>
                        <input className={shouldMarkErrorPhone('phone') ? "error registration" : "phone registration"}
                            type="text"
                            maxLength='10'
                            minLength='10'
                               onChange={this.handlePhoneChange}
                               onBlur={this.handleBlur('phone')}
                            placeholder="Phone Number"
                            ref={input => this.getPhone = input }/>
                            <span className={shouldMarkErrorPhone('phone') ? "error" : "hidden"}
                            >{this.state.errorMessage ? this.state.errorMessage : null}</span>
                        </div>
                        <br />
                    <div className={"email"}>
                        <input className={shouldMarkError('email') ? "error registration" : "email registration"}
                               placeholder={"Cognizant Email"}
                               type="email"
                               onChange={this.handleEmailChange}
                               onBlur={this.handleBlur('email')}
                               ref={input => this.getEmail = input }/>
                        <br />
                        <span className={shouldMarkError('email') ? "error" : "hidden"}
                        >{this.state.errorMessage ? this.state.errorMessage : null}</span>
                    </div>
                    <br/>
                    <div className={"password"}>
                        <input className={shouldMarkErrorPassword('password') ? "error registration" : "password registration"}
                            required
                            placeholder={"Password"}
                            type="password"
                               onChange={this.handlePasswordChange}
                               onBlur={this.handleBlur('password')}
                            ref={input => this.getPassword = input }/>
                            <br />
                        <span className={shouldMarkErrorPassword('password') ? "error" : "hidden"}
                        >{this.state.errorMessage ? this.state.errorMessage : null}</span>
                    </div>
                    <br/>
                    <div className={"retypePassword"}>
                        <input className={shouldMarkErrorRetype('retypePassword') ? "error registration" : "retypePassword registration"}
                            required
                            placeholder={"Reenter Password"}
                            type="password"
                               onChange={this.handleRetypePasswordChange}
                               onBlur={this.handleBlurRetype('retypePassword')}
                               onPaste={(e)=>e.preventDefault()}
                            ref={input => this.getRetypePassword = input }/>
                        <span className={shouldMarkErrorRetype('retypePassword') ? "error" : "hidden"}
                        >{this.state.errorMessage ? this.state.errorMessage : null}</span>
                    </div>
                        <br />

                    <br/>
                    <div className="registration-buttons">
                        <Button
                            className="btn btn-info submit1"
                            type="submit">Submit
                        </Button>
                        <input
                            className="btn btn-outline-primary"
                            value='Clear'
                            type='reset'>
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
//
// function mapDispatchToProps(dispatch) {
//     return { actions: bindActionCreators(fetchAction, dispatch) }
//}

export default connect(mapStateToProps)(SignUp);