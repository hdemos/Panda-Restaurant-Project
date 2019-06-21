import { registrationValidationError } from '../actions/fetchAction';
import registrationValidationErrors    from '../utils/registrationValidationError';
import registrationIsValid             from '../utils/registrationIsValid';

const formValidationMiddleware = ({ dispatch, getState}) => next => action => {
    if (action.type !== "API") {
        return next(action)
    }
    const { userSignup } = action;
    let errors          = registrationValidationErrors(userSignup)
    if (!registrationIsValid(errors)) {
        dispatch(registrationValidationError(errors))
    } else {
        next(action)
    }
};

export default formValidationMiddleware;