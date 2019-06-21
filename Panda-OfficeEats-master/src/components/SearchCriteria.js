import React,{Component} from 'react'
import { connect } from "react-redux";

import RestaurantsInfo from "../containers/RestaurantsInfo";
import {thunk_action_creator} from "../actions/fetchAction";
import '../index.css';

class SearchCriteria extends Component{


    handleSubmit = e =>{
        e.preventDefault();
        const zipcode = this.getZipcode.value;
        const distance = this.getDistance.value;
        this.props.dispatch(thunk_action_creator(zipcode, distance));
    };
    static numbers=[0,1,2,3,4,5,6,7,8,9];
    handlePaste= e=>{
        let pasteDate=e.clipboardData.getData("text");
        if(pasteDate.length>5||pasteDate.split("").some(c=>!SearchCriteria.numbers.includes(parseInt(c))))
            e.preventDefault();
    }

    render() {
        console.log(this.props.data);

        return(
            <div>
                <form  onSubmit={this.handleSubmit} style={{ marginBottom: "2rem" }}>
                    <label className= "title">Enter the Zipcode
                        <input
                            type="TEXT"
                            className="form__input"
                            placeholder="Enter Zipcode"
                            onKeyPress={(e)=>{if(!SearchCriteria.numbers.includes(parseInt(e.key))) e.preventDefault()}}
                            onPaste={this.handlePaste}
                            maxLength='5'
                            size="5"
                            minLength='5'
                            required
                            ref={input => this.getZipcode = input }

                        />
                    </label>

                    <label className= "title">Distance in Miles
                        <input
                            type="number"
                            min='0'
                            max='5'
                            step='1'
                            defaultValue='0'
                            onKeyDown={(e)=>e.preventDefault()}
                            className="form__input"
                            placeholder="Distance in Miles"
                            required
                            ref={input => this.getDistance = input }
                        />
                    </label>

                    <button className="form__button">Submit</button>
                    <br />
                </form>

                {this.props.data.isFetching ? <h3>Loading...</h3> : null}
                {this.props.data.isError ? (
                    <h3 className="error">No Restaurant Found.</h3>
                ): null}
                {Object.keys(this.props.data.userData).length > 0 ? (
                    <RestaurantsInfo user = {this.props.data.userData} />
                ): ((this.props.data.searchDone) ? "No Restaurant Found." : null)}


            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        data: state
    };
};

export default connect(mapStateToProps) (SearchCriteria);