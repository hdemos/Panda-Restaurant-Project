import React,{Component} from 'react'
import '../restaurantProfile.css';
import { connect } from 'react-redux';
import {receive_error, receive_post, returnHomePage} from "../actions/fetchAction";
class RestaurantsProfile extends Component {
    constructor(props) {
        super(props);
        this.state={
            reviewlist:[]
        }
    }
    saveReview= async (e)=>{
        if(this.reviewBody.value === "") {
            e.preventDefault();
            alert("Review cant be empty")
            return
        }
        const review={
            userEmailID:"admin@cognizant.com",
            reviewDate: new Date(),
            reviewBody: this.reviewBody.value,
            rating: 3,
            restaurantId:this.props.restaurant.id
        }
        this.reviewBody.style.display='block';
        this.reviewBody.value=null;
        await fetch('https://panda-reviews-stage.herokuapp.com/review/addReview', { method: 'PUT', headers: {'Accept': 'application/json','Content-Type': 'application/json'}, body: JSON.stringify(review)});
    }
    render() {
        let directionsurl = `https://www.yelp.com/map/${this.props.restaurant.alias}`;
        //console.log(`https://localhost:8888/review?resId=${this.props.restaurant.id}`)
        fetch(`https://gosling-reviews-stage.herokuapp.com/review?resId=${this.props.restaurant.id}`)
            .then(data => data.json())
            .then(data => this.setState({reviewlist:data}));
        console.dir(this.state.reviewlist);
        return (
            <div className="container">
                <div className="select-rest">
                    <div>
                        <img className="select-rest__img" src={this.props.restaurant.imgURL} alt="new"/>
                        <h3 className="select-rest__title"> {this.props.restaurant.name} </h3>
                        <span>{this.props.restaurant.address1}</span>
                        <span> {this.props.restaurant.address2}</span>
                        <span>{this.props.restaurant.city}</span><br/>
                        <a href={'tel:' + this.props.restaurant.phoneNumber.replace('(', '').replace(') ', '')
                            .replace('-', '')} target='_blank'>
                            <span>{this.props.restaurant.phoneNumber}</span>
                        </a>
                        <br/><br/>
                        <span> Rating : </span><br/>
                        <span>Price : $$</span><br/>
                        <span>Reservation : {this.props.restaurant.reservationNeeded ? 'Available' : 'Not Available'}</span>
                        <br/><br/>
                        <span><a className="link_button" target="_blank" href={directionsurl}>Directions</a></span>
                        <span><a className="link_button" target="_blank"
                                 href={this.props.restaurant.restURL}>Menu</a></span>
                        <button className="select-rest__button"
                                onClick={() => this.props.dispatch(returnHomePage(this.props.userData))}>Back
                        </button>
                    </div>
                    <div className="info">
                        <h3>Restaurant Reviews</h3>
                        <div className="review">
                            {this.state.reviewlist.map(function (rev) {
                                let trimdate = rev.reviewDate.substr(0,10)
                                return (
                                    <div>
                                        <span className="title">{rev.reviewBody}</span>
                                        <span className="author">By {rev.userEmailID} on {trimdate}</span>
                                        <br />
                                    </div>
                                )
                            })
                            }
                        </div>
                        <br />
                        <br />
                        <div>
                         <textarea rows="4" cols="50" name="reviewBody" ref={input => this.reviewBody = input} style={{display:"block"}}>
                         </textarea>
                            <div className="button submit blueSubmit left" onClick = {this.saveReview}>Submit Review</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state
    };
};
export default connect(mapStateToProps)(RestaurantsProfile);
