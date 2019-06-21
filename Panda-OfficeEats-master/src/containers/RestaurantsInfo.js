import { connect } from 'react-redux';
import RestaurantsInfo from '../components/RestaurantsInfo.js';
import { navRestaurantsProfile} from '../actions/fetchAction';

const mapStateToProps = (state) => {
    return {
        restaurant: state.restaurant
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        restaurantsView: (restaurant,restaurants) => dispatch(navRestaurantsProfile(restaurant,restaurants))


    }
}

export default connect( mapStateToProps, mapDispatchToProps)(RestaurantsInfo);