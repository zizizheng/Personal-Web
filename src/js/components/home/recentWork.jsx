import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';

import temImage from '../../../assets/images/s1.jpg'
import foodhub from '../../../assets/images/profilio/foodhub.png';

class RecentWork extends Component {

    constructor(){
        super();
        this.changePage = this.changePage.bind(this);
    }

    render() {
        return (
            <div className="recentworks topspace">
                <h2 className="section-title"><span>Recent Works</span></h2>
                <div className="thumbnails recentworks">
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <Link to={{ pathname: '/profolio', state: { curPage: 'foodhub' }}} className="thumbnail" onClick={()=> this.changePage('profolio')}>
                            <span className="img">
                                <img src={foodhub} alt="foodhub" />
                                <span className="seeDetail"><span className="more">See details &rarr;</span></span>
                            </span>
                            <span className="title">Foodhub - Post System</span>
                        </Link>
                        <span className="details"><a href="">Web Design</a> | <a href="">Application</a> | <a href="">FrontEnd</a></span>
                        <h4></h4>
                        <p></p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <Link to={{ pathname: '/profolio', state: { curPage: 'master' }}} className="thumbnail">
                            <span className="img">
                                <img src={temImage} alt="" />
                                <span className="seeDetail"><span className="more">See details &rarr;</span></span>
                            </span>
                            <span className="title">Pure ipsum - development services for people</span>
                        </Link>
                        <span className="details"><a href="">Web design</a> | <a href="">Wordpress</a></span>
                        <h4></h4>
                        <p></p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <a className="thumbnail" href="sidebar-right.html">
                        <span className="img">
                            <img src={temImage} alt="" />
                            <span className="seeDetail"><span className="more">See details &rarr;</span></span>
                        </span>
                        <span className="title">Lorem studios - interior and patio design</span>
                        </a>
                        <span className="details"><a href="">Web design</a> | <a href="">Logotype</a></span>
                        <h4></h4>
                        <p></p>
                    </div>
                </div>
            </div>
        );
    }

    changePage(v){
        this.props.dispatch({type: "CHANGE_PAGE", name: v});
    }
}

export default connect()(RecentWork);