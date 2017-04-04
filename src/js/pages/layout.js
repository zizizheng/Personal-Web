import React from 'react';

import Nav from '../components/layout/nav';
import Header from '../components/layout/header';

export default class Layout extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <Nav />

            </div>
        );
    }
}