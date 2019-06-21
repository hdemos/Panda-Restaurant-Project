export default function registrationIsValid(errors) {
    return !Object.values(errors).some(err => err)
}