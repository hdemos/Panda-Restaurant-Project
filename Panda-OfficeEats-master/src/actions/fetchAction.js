import store from "../store";


export const fetch_post = () => {
    return {
        type: "FETCH_RESTAURANTS"
    };
};

export const receive_post = post => {
    return {
        type: "FETCHED_RESTAURANTS",
        data: post
    };
};

export const receive_error = () => {
    return {
        type: "RECEIVE_ERROR"
    };
};

export const navSignIn = () => {
    return {
        type: "NAV_SIGNIN",
        view: 'SignIn'

    };
};


export const navSignUp = () => {
    return {
        type: "NAV_SIGNUP",
        view: 'SignUp'

    };
};
export const signedUp_post = () => {
    return {
        type: "SIGNED_UP",
            view: 'SignIn'
    }
}

export const fetch_post_signup = () => {
    return {
        type: "SIGN_UP_FETCH"
    }
}

export const signedIn_post = () => {
    return {
        type: "SIGNED_IN",
        view: 'SearchCriteria'
    }
}

export const fetch_post_signin = () => {
    return {
        type: "SIGN_IN_FETCH"
    }
}


export const navHome = () => {
    return {
        type: "NAV_HOME",
        view: 'Home'

    };
};

export const saveUser = (firstName, lastName, phone, email, password, retypePassword, role) => {

    if(password !== retypePassword){
        return {
            type: "RECEIVE_ERROR",
            errorMessage: "passwords does not match"
        }
    }
    store.dispatch(fetch_post_signup());
    return async (dispatch) => {
        const req = await fetch(`https://gosling-registration-stage.herokuapp.com/api/auth/signup/`, {

        //const req = await fetch(`http://localhost:8080/api/auth/signup/`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName:firstName,
                lastName:lastName,
                phone:phone,
                email:email,
                password:password,
                retypePassword:retypePassword,
                role : ["admin"]
                // "firstName":"sambasiva1",
                // "lastName":"sugguna",
                // "phone":"6266204613",
                // "email":"haley432979@cognizant.com",
                // "password":"Svssr@4029",
                // "retypePassword":"Svssr@4029",
                // "role" : ["admin"]
            }),
        }).then(response=>{if(!response.ok) throw new Error("test")}).then(data=>dispatch(signedUp_post())).catch(e=>alert(e));
    }
};

export const signinUser = (email, password) => {

    store.dispatch(fetch_post_signin());
    return async (dispatch) => {
        const req = await fetch(`https://gosling-registration-stage.herokuapp.com/api/auth/signin/`, {
            //const req = await fetch(`http://localhost:8080/api/auth/signin/`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:email,
                password:password,
                // "firstName":"sambasiva1",
                // "lastName":"sugguna",
                // "phone":"6266204613",
                // "email":"haley432979@cognizant.com",
                // "password":"Svssr@4029",
                // "retypePassword":"Svssr@4029",
                // "role" : ["admin"]
            }),
        }).then(data=>{if(!data.ok)throw new Error("Email or password are incorrect");}).then(data=>dispatch(signedIn_post())).catch(e=>alert(e)) ;
    }
};

export const thunk_action_creator = (zipcode,distance) => {
    //const zip = zipcode.replace(/\s/g, "");
    store.dispatch(fetch_post());
    //console.log(`https://gosling-yelp-stage.herokuapp.com/searchRestaurant/${zipcode}/${distance}`);
    return function (dispatch, getState){
        return fetch(`https://gosling-yelp-stage.herokuapp.com/searchRestaurant/${zipcode}/${distance}`)
            .then(data => data.json())
            .then(data => {
                if (data.message === "Not Found"){
                    throw new Error("No such user found!!");
                } else dispatch(receive_post(data));
            })
            .catch(err => dispatch(receive_error()));
    }
};


export const navRestaurantsProfile = (restaurant, restaurants) => {
    return  {
        type: "NAV_REST_PROFILE",
        restaurant: restaurant,
        view: 'RestaurantsProfile',
        userData:restaurants
    };
};
export const returnHomePage = (restaurantList) => {

    return{
        type: "RETURN_HOME_PAGE",
        view:'SearchCriteria',
        data: restaurantList
    };

};
//COMPLETE: finish saveUser action for validation if time
// export function saveUser(userSignup) {
//     return {
//         type: "API",
//         userSignup
//     };
// }

//COMPLETE: finish updateRegistrationAttributes action
export function updateRegistrationAttributes(newAttributes){
    return {
        type: "UPDATE_REGISTRATION_ATTRIBUTES",
        newAttributes
    }
}

//COMPLETE: finish clearUser action
export function clearUser() {
    return {
        type: "CLEAR_USER"
    }
}


export function saveUserSuccess(userSignup) {
    return {
        type: "SAVE_USER_SUCCESS",
        userSignup
    }
}

export function saveUserFailure(userSignup)  {
    return {
        type: "SAVE_USER_FAILURE",
        userSignup
    }
}

export function registrationValidationError(errors) {
    return {
        type: "USER_VALIDATION_ERROR",
        errors
    }
}


// export const restaurantsProfile = (id) => ({type: "REST_PROFILE", id});