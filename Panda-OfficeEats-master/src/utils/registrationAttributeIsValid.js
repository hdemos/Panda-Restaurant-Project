import { attributeValidators } from './attributeValidators';

export default function registrationAttributeIsValid(userSignup, attribute) {
    if (attributeValidators[attribute]) {
        return attributeValidators[attribute](userSignup);
    } else {
        return true;
    }
}