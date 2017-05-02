import React from 'react';

import foodubImg from '../../../assets/images/profilio/foodhub.png';

export default class Foodhub extends React.Component {

    render(){
        return (
            <article className="col-lg-9">
                <h1 className="title">Foodhub</h1>
                <h2>The goal of Foodhub is to manage donations from kind people and deliver to those who needs help.  </h2>
                <p>Managing donations has been a difficult issue for Foodhub since these are more and more donations coming from everywhere in Taiwan.
                   And an online postsystem will hlep members of Foodhub to manage donations, donees and donors<br/>
                <strong>Angular</strong> is applied as the front end development framework, 
                    <strong>Node.js</strong> and <strong>express.js</strong> are used in server side.<br/>
                    The postsystem provides the following services:
                </p>
                <ul>
                    <li>Different permission between members</li>
                    <li>Donations management (import & export)</li>
                    <li>Donors and donees management (who donate and who receive)</li>
                    <li>Receipts generate</li>
                    <li>Account management (Administrator)</li>
                </ul>
                <div className="graphBlock">
                    <p>The login page of the post system</p>
                    <img src={foodubImg} alt="foodhub system" className="" />
                </div>
            </article>
        );
    }
}