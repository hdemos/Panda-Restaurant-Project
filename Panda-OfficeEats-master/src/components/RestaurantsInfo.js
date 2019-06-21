import React from "react";
import {Component} from "react"
//import {connect} from "react-redux";
class RestaurantsInfo extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let restaurantsView=this.props.restaurantsView;
        let restaurantList = this.props.user;
        return (<div className="container">
                <div className="row">
                    {this.props.user.map(function (res, idx) {
                        let dist = res.distance * 0.000621;
                        let distMiles = dist.toFixed(2)
                        return (<div key={idx} className="col-md-4" style={{ marginBottom:"2rem" }}>
                            <div className="res__box">
                                <img className="rest__box-img" src={res.imgURL} alt="" />
                                <div className="rest__text">
                                    <h5 className="res__title">
                                        {res.name.length < 20 ? `${res.name}` : `${res.name.substring(0,25)}...`}
                                    </h5>
                                    <p className="res__subtitle"> Distance:<span>{distMiles} Miles</span></p>
                                    <button className="rest_buttons" onClick={()=>restaurantsView(res, restaurantList)} >View Profile</button>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        );
    }
}
// const mapStateToProps = state => {
//     return {
//         data: state
//     };
// };

export default RestaurantsInfo;