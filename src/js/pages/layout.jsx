import React from 'react';
import { connect } from 'react-redux';

import Nav from '../components/layout/nav';
import Header from '../components/layout/header';

class Layout extends React.Component{

    render(){
        return (
            <div>
                <Header />
                <Nav />
            </div>
        );
    }
}

export default connect()(Layout);