import {
    saveUserSuccess,
    saveUserFailure
} from '../actions/fetchAction';

const apiMiddleware = ({ dispatch, getState}) => next => action => {
    if (action.type !== "API") {
        return next(action)
    }
    //TODO: make sure path is correct
    fetch('/api/auth/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userSignup: action.userSignup
        })
    }).then((response) => {
        return response.json();
    }).catch((error) => {
        dispatch(saveUserFailure(error));
    }).then((data) => {
        dispatch(saveUserSuccess(data)); //where are we specifying data?
    });
};

export default apiMiddleware;