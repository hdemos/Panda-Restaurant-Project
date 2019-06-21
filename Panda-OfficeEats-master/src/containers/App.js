import { connect } from 'react-redux';

import App from '../components/App.js';

const mapStateToProps = (state) => {

    return {
        'view': state.view,
        data:state
    }
}

export default connect(mapStateToProps)(App);