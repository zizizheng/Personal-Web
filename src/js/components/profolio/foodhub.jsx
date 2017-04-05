import React from 'react';

import foodubImg from '../../../assets/images/profilio/foodhub.png';

export default class Foodhub extends React.Component {

    render(){
        return (
            <article className="col-lg-9 maincontent">
                <h3>Foodhub</h3>
                <p>The goal of Foodhub is to manage donations from kind people and deliver to those who needs help.  </p>
                <p><img src={foodubImg} alt="foodhub system" className="" /></p>
            </article>
        );
    }
}