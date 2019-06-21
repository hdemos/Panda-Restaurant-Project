import React,{Component} from 'react'

import { Form, Button}        from 'react-bootstrap'
// import {navSignIn} from "../actions/fetchAction";


export class Home extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        let signinView=this.props.signinView;


        return(
            <div className="home-div">

                <div className="button-area-line">
                    <a href="#" className={"a-button"} onClick={()=>this.props.signinView()}>SignIn</a>
                    <a href="#" className={"a-button"} onClick={()=>this.props.signupView()}>SignUp</a>
                </div>

            </div>
        );
    }
}
export default Home;
