import React from 'react';

import {restaurantSearch} from "../reducers/index";
import reducer from "../reducers/index";


describe('Reducers', () => {

    it('should set fetch of FETCH RESTAURANTS', () => {
        const initialStateApp = {
            isError:false,
            isFetching:true,
            userData:{}
        };

        const expectedEditState = {
            isError:false,
            isFetching:true,
            userData:{}
        };

        const actualState = reducer(initialStateApp, {type: 'FETCH_RESTAURANTS'});

        expect(expectedEditState).toEqual(actualState);
    });

    it('should set fetched list of  FETCHED_RESTAURANTS', () => {
        const initialStateApp = {
            isError:false,
            isFetching:false,
            userData:undefined
        };

        const expectedEditState = {
            isError:false,
            isFetching:false,
            userData:undefined
        };

        const actualState = reducer(initialStateApp, {type: 'FETCHED_RESTAURANTS'});

        expect(expectedEditState).toEqual(actualState);
    });

});






