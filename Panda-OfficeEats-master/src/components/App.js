import React, { Component } from 'react';

import SearchCriteria from '../components/SearchCriteria';
import RestaurantsProfile from '../components/RestaurantsProfile';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import Home from '../containers/Home';

//import RestaurantsProfile from '../containers/RestaurantsProfile';


//import Nav from './Nav.js';
import  '../App.css'
import '../index.css';
//import '../skeleton.css';

export default class App extends Component {

    get currentView() {
        if(this.props.data.view === 'SearchCriteria') return <SearchCriteria />
        if(this.props.data.view === 'RestaurantsProfile')
            return <RestaurantsProfile userData={this.props.data.userData} restaurant={this.props.data.restaurant} />
        if(this.props.view === 'SignUp') return <SignUp />
        if(this.props.view === 'SignIn') return <SignIn />
        if(this.props.view === 'Home') return <Home />
        return <Home />

    }

    render() {
        return (
            <div className="App">
                {this.currentView}
            </div>
        );
    }
}