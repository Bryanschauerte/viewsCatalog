import React from 'react';
import {connect} from 'react-redux';
import Displays from './Displays';



class App extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <h1>'Can I Code this UI' Challenges</h1>
                <h3>A Collection of Pretty Stateless Views/Containers</h3>
                <div>
                  <Displays></Displays>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {

    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
