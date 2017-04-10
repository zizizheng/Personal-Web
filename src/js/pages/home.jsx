import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import myself from '../../assets/images/myself.jpg';
import temImage from '../../assets/images/s1.jpg'
import foodhub from '../../assets/images/profilio/foodhub.png';

export default class Home extends React.Component {
    render(){
        return (
            <main id="main">
                <div className="container">
                    <div className="row section intro">
                        <div className="col-md-12">
                            <p className="lead text-muted text-center">
                                Hi, this is my personal page.<br />
                                Self-introduction is presented in <Link to="/about">About</Link>, including my programing skills and my personal experience.<br />
                                <Link to="/profolio">Profolio</Link> shows the recent works I have done, and my master's dissertation is presented as well.<br />
                                <Link to="/contact">Contact</Link> contains any information that can contact me, please check it.<br />
                            </p>
                            <p className="lead text-center"><strong>Hope You Enjoy!</strong></p>
                        </div>
                    </div>

                    <div className="row section featured topspace">
                        <h2 className="section-title"><span>Glance</span></h2>
                        <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <img src={myself} alt="personal" />
                        </div>
                        <div className="col-sm-6 col-md-8">
                            <h3 className="lead">My name is ZiZi Zheng<br /></h3>
                            <div className="section content">
                            <h4 className="lead">I'm a</h4>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <p className="lead"><strong>Programer</strong> since senior high (JavaScript, Html5, CSS3, C++, C#)</p>
                                <p className="lead"><strong>Volleyball</strong> lover, usually play wing spiker in game</p>
                                <p className="lead"><strong>Music</strong> mania, play acoustic and eletric guitar</p>
                                <p className="lead">//something else</p>
                            </div>
                            <Link to='/about#main' className="more-link">more about me</Link>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="row section recentworks topspace">
                        <h2 className="section-title"><span>Recent Works</span></h2>
                        <div className="thumbnails recentworks row">
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <Link to={{ pathname: '/profolio', state: { curPage: 'foodhub' }}} className="thumbnail">
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
                </div>
            </main>
        );
    }
}