import React from 'react';

import foodubImg from '../../../assets/images/profilio/foodhub.png';

export default class Foodhub extends React.Component {

    render(){
        return (
            <article className="col-lg-9">
                <h1>Foodhub</h1>
                <h2>The goal of Foodhub is to manage donations from kind people and deliver to those who needs help.  </h2>
                <p>Managing donations has been a difficult issue for Foodhub since these are more and more donations coming from everywhere in Taiwan.
                   And an online postsystem will hlep members of Foodhub to manage donations, donees and donors<br/>
                This postsystem uses <strong>Angular</strong> as front end development framework, 
                    <strong>Node.js</strong> and <strong>express.js</strong> are used in server side
                </p>
                <img src={foodubImg} alt="foodhub system" className="" />
            </article>
        );
    }
}