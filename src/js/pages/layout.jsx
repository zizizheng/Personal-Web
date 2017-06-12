import React from 'react';
import { connect } from 'react-redux';

import Nav from '../components/layout/nav';
import Header from '../components/layout/header';
import ToTop from '../components/layout/to-top';

class Layout extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Nav />
                <ToTop />
            </div>
        );
    }
}

export default connect()(Layout);