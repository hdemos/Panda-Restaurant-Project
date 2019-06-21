import { connect } from 'react-redux';
import Home from '../components/Home';
import {navSignIn, navSignUp} from '../actions/fetchAction';

const mapStateToProps = (state) => {
    return {
        view: state.view
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        signinView: () => dispatch(navSignIn()),
        signupView: () => dispatch(navSignUp())


    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Home);
