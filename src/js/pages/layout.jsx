import React from 'react';
import { connect } from 'react-redux';

import Nav from '../components/layout/nav';
import Header from '../components/layout/header';

class Layout extends React.Component{

    render(){

        this.props.dispatch({type: "CHANGE_PAGE", name: "about"})
        console.log(this.props);
        return (
            <div>
                <Header />
                <Nav />

            </div>
        );
    }
}

export default connect()(Layout);