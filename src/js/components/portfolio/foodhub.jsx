import React from 'react';

import foodubImg from '../../../assets/images/portfolio/foodhub.png';
import welcomeImg from '../../../assets/images/portfolio/welcome.png';
import expiryImg from '../../../assets/images/portfolio/expiry.png';
import searchImg from '../../../assets/images/portfolio/searchPanel.png'
import addImg from '../../../assets/images/portfolio/addPanel.png'

export default class Foodhub extends React.Component {

    render() {
        return (
            <article className={this.props.class}>
                <h1 className="title">Foodhub</h1>
                <h2 className="subtitle">The goal of Foodhub is to manage donations from charity people and deliver to those who needs help.  </h2>
                <p>Managing donations has been a difficult issue for Foodhub since these are more and more donations coming from everywhere in Taiwan.
                   And an <em>online pos system</em> will hlep members of Foodhub to manage donations, donees and donors.
                </p>
                <p><strong>Angular 2(4)</strong> is applied as the front end development framework,
                    <strong> Node.js</strong> and <strong>express.js</strong> are used in server side.
                    The pos system provides the following services:
                </p>

                <ul>
                    <li>Different permission between members</li>
                    <li>Donations management (import & export)</li>
                    <li>Donors and donees management (who donates and who receives)</li>
                    <li>Receipts generate</li>
                    <li>Account management (Administrator)</li>
                </ul>

                {this.Login()}

                {this.WelcomePage()}

                {this.Management()}

                {this.Report()}
            </article >
        );
    }

    Login() {
        return (
            <section>
                <h2 className="section-title"><span>Home Page</span></h2>
                <p>Since the personal information of donors and donees should not be visible for every user, we provide a login system for Foodhub pos system. It help Foodhub to divide users into <strong>Administrator</strong> and <strong>Memeber</strong>, the former has all permissions of the pos system while the letter can only deal with donations.

                </p>
                <div className="graphBlock">
                    <h3>The login page of the post system</h3>
                    <img src={foodubImg} alt="foodhub system" />
                </div>
            </section>
        );
    }

    WelcomePage() {
        return (
            <div>
                <p>
                    We persent the list of donations expired in three weeks when user successfully login the pos system. User can click the rotating leaf to adjust the days of expiry.
                </p>
                <div className="graphBlock">
                    <h3>Welcome page with expiries</h3>
                    <img src={welcomeImg} alt="welcome page" />
                    <h3>Adjust expiry days</h3>
                    <img src={expiryImg} alt="welcome page" />
                </div>
            </div>
        );
    }

    Management() {
        return (
            <section>
                <h2 className="section-title"><span>Managerment</span></h2>
                <p>
                    The managing interface between donations, donors, donees and system users are quite similar. Take donation managing interface to give a rough illstration.
                </p>
                <p>
                    In <strong>Search</strong> panel, user can search donation by its namd and category, the searching results are shown on the form below. Then user can choose a donation to export, update its information or delete it.
                </p>
                <p>
                    In <strong>Add</strong> panel, user can add a brand new donation, or just add some donations which just imported and update the storage data in the database. We provide a feature for donation call <strong>Auto Fill In</strong>, that if the donation has been imported before, just scan the barcode of the donation (or type in), the interface will fill the required data for user, saving some time for typing moonshine. User can click the blue arrow below to expand the form for importing servel donations at one time.
                </p>
                <div className="graphBlock">
                    <h3>The Managing Interface of Donation - Search Panel</h3>
                    <img src={searchImg} alt="search panel" />
                    <h3>The Managing Interface of Donation - Add Panel</h3>
                    <img src={addImg} alt="Add panel" />
                </div>
            </section>
        );
    }

    Report() {
        return (
            <div>
                <h2 className="section-title"><span>Report</span></h2>
                <p>
                    The <strong>Receipt Generator</strong> and <strong>Report Form</strong> are still in progress.
                    Receipt Generator would provide user to generate customize receipt for donor or donee who import or export donations.
                    Report Form is for system user that can show donation statistics.
                </p>
            </div>
        );
    }

}
