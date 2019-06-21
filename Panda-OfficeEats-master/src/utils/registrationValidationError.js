import { attributeValidators } from './attributeValidators';

export default function registrationValidationErrors(userSignup) {
    Object.keys(attributeValidators).reduce((errors, validator) => {
        errors[validator] = !attributeValidators[validator](userSignup)
    }, {})
    return null; //errors;
}