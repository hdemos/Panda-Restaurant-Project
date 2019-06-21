import registrationAttributeIsValid    from '../utils/registrationAttributeIsValid';

const validateAttributeUpdateMiddleware = ({ dispatch, getState}) => next => action => {
    if (action.type !== "UPDATE_REGISTRATION_ATTRIBUTES") {
        return next(action)
    }
    const { newAttributes } = action;
    const { userSignup }     = getState();
    let updatedUser    = {...userSignup, ...newAttributes};
    const attrName          = Object.keys(newAttributes)[0];
    action.errors = {
        [attrName]: !registrationAttributeIsValid(updatedUser, attrName)
    };
    next(action)
};


export default validateAttributeUpdateMiddleware;