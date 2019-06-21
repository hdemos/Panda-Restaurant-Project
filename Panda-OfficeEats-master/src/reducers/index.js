import userSignup from './initialStates/userSignup';


const initialState = {
    userData: [],
    isFetching: false,
    isError: false,
    errorMessage: undefined,
    view: 'Home',
    selectedRestaurantId: undefined,
    restaurant: undefined,
    searchDone: false,
    //userSignup

};

const asyncReducer = (state = initialState, action) => {
    switch (action.type){
        case "FETCH_RESTAURANTS":
            return Object.assign({}, state, {
                isFetching: true,
                userData: {},
                isError: false,
                searchDone: false
            });
        case "FETCHED_RESTAURANTS": return Object.assign({}, state, {
            userData: action.data,
            isFetching: false,
            isError: false,
            searchDone : true

        });
        case "RECEIVE_ERROR":
            return Object.assign({}, state, {
                isError: true,
                isFetching: false
            });
        case "NAV_REST_PROFILE": {
            return Object.assign({}, state, {
                userData: action.userData,
                view:action.view,
                isFetching: false,
                isError: false,
                restaurant: action.restaurant
            });

        }
        case "UPDATE_REGISTRATION_ATTRIBUTES":
            return {
                ...state,
                ...action.newAttributes,
                errors: {
                    ...state.errors,
                    ...action.errors
                }
            };
        case "USER_VALIDATION_ERROR":
            return {
                ...state,
                errors: {
                    ...state.errors,
                    ...action.errors
                }
            };
        case "CLEAR_USER":
            return userSignup;
        case "NAV_SIGNIN": {
            return Object.assign({}, state, {
                view:action.view,


            });

        }


        case "NAV_SIGNUP": {
            return Object.assign({}, state, {
                view:action.view,


            });

        }

        case "SIGN_UP_FETCH": {
            return Object.assign({}, state, {
                isFetching: true,
                userSignup: {},
                isError: false
            });
        }

        case "SIGNED_UP": {
            return Object.assign({}, state, {
                view: action.view,
                isFetching: false


            });
        }

        case "SIGN_IN_FETCH": {
            return Object.assign({}, state, {
                isFetching: true,
                userSignup: {},
                isError: false
            });
        }

        case "SIGNED_IN": {
            return Object.assign({}, state, {
                view: action.view,
                isFetching: false


            });
        }
        //nav to actual home page
        case "NAV_HOME": {
            return Object.assign({}, state, {
                view:action.view,
            });

        }
        //nav to search criteria, not home
        case "RETURN_HOME_PAGE": {

            return Object.assign({}, state, {
                userData: action.data,
                view: action.view,
                isFetching: false,
                isError: false,

            });
        };

        default:
            return state;
    }
};

const navRestaurantsProfile = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.view = 'RestaurantsProfile';
    alert('reducer navRestaurnatsProfile');
    //newState.selectedRestaurantId = undefined;
    newState.userData = newState.userData.filter(e => e.id !== action.selectedRestaurantId);
    return newState;
}
export default asyncReducer;