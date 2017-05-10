import React from 'react';

import foodubImg from '../../../assets/images/profilio/foodhub.png';
import welcomeImg from '../../../assets/images/profilio/welcome.png';
import expiryImg from '../../../assets/images/profilio/expiry.png';
import searchImg from '../../../assets/images/profilio/searchPanel.png'
import addImg from '../../../assets/images/profilio/addPanel.png'

export default class Foodhub extends React.Component {

    render(){
        return (
            <article>
                <h1 className="title">Foodhub</h1>
                <h2 className="subtitle">The goal of Foodhub is to manage donations from kind people and deliver to those who needs help.  </h2>
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
                
                { this.Login() }
                
                { this.WelcomePage() }

                { this.Management() }

                { this.Report() }
            </article>
        );
    }

    Login(){
        return (
            <div>
                <p>Since the personal information of donors and donees should not be visible for every user, we provide a login system for Foodhub postsystem. It help Foodhub to divide users into <strong>Administrator</strong> and <strong>Memeber</strong>, the former has all permissions of the postsystem while the letter can only deal with donations.

                </p>
                <div className="graphBlock">
                    <p>The login page of the post system</p>
                    <img src={foodubImg} alt="foodhub system" />
                </div>
            </div>
        );
    }

    WelcomePage(){
        return (
            <div>
                <p>
                    We persent the list of donations expired in three weeks when user successfully login the postsystem. User can click the rotating leaf to adjust the days of expiry. 
                </p>
                <div className="graphBlock">
                    <p>Welcome page with expiries</p>
                    <img src={welcomeImg} alt="welcome page" />
                    <p>Adjust expiry days</p>
                    <img src={expiryImg} alt="welcome page" />
                </div>
            </div>
        );
    }

    Management(){
        return (
            <div>
                <p>
                    The managing interface between donations, donors, donees and system users are quite similar. Take donation managing interface to give a rough illstration.<br/>
                    In <strong>Search</strong> panel, user can search donation by its namd and category, the searching results are shown on the form below. Then user can choose a donation to export, update its information or delete it.<br/>
                    In <strong>Add</strong> panel, user can add a brand new donation, or just add some donations which just imported and update the storage data in the database. We provide a feature for donation call <strong>Auto Fill In</strong>, that if the donation has been imported before, just scan the barcode of the donation (or type in), the interface will fill the required data for user, saving some time for typing moonshine. User can click the blue arrow below to expand the form for importing servel donations at one time. 
                </p>
                <div className="graphBlock">
                    <p>The Managing Interface of Donation - Search Panel</p>
                    <img src={searchImg} alt="search panel" />
                    <p>The Managing Interface of Donation - Add Panel</p>
                    <img src={addImg} alt="Add panel" />
                </div>
            </div>
        );
    }

    Report(){
        return (
            <div>
                <p>
                    The <strong>Receipt Generator</strong> and <strong>Report Form</strong> are still in progress. 
                    Receipt Generator would provide user to generate customize receipt for donor or donee who import or export donations.
                    Report Form is for system user that can show donation statistics.
                </p>
            </div>
        );
    }

}
