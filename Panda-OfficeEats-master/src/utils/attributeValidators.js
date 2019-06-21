export const attributeValidators = {
    email: emailValid,
    password: passwordValid
}

function passwordValid(userSignup){
    return userSignup.password &&
        userSignup.password.length > 5 &&
        userSignup.password.length < 20 ;
    //TODO: add check for password values regex
}

function emailValid(userSignup) {
    return userSignup.email && userSignup.email.split("@")[1] === "cognizant.com"
}
//keep for lowercase validation
// function terraformPlanetValid(astronaut) {
//     const { terraform_experience, terraform_planets } = astronaut;
//     if (terraform_experience) {
//         return terraform_planets &&
//             terraform_planets.length > 0 &&
//             !terraform_planets.toLocaleLowerCase().includes("mars");
//     } else {
//         return true
//     }
// }