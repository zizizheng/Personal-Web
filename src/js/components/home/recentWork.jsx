import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';

import temImage from '../../../assets/images/s1.jpg'
import foodhub from '../../../assets/images/profilio/foodhub.png';
import itets from '../../../assets/images/profilio/itets.png';

class RecentWork extends Component {

    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);
    }

    render() {
        return (
            <div className="recentworks topspace">
                <h2 className="section-title"><span>Recent Works</span></h2>
                <div className={this.props.style + " thumbnails"} onClick={() => this.changePage('profolio')}>
                    <div className="single">
                        <Link to={{ pathname: '/profolio', state: { curPage: 'foodhub' } }} className="thumbnail">
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
                    <div className="single">
                        <Link to={{ pathname: '/profolio', state: { curPage: 'dissertion' } }} className="thumbnail" >
                            <span className="img">
                                <img src={itets} alt="dissertion architecture" />
                                <span className="seeDetail"><span className="more">See details &rarr;</span></span>
                            </span>
                            <span className="title">ITETS - Posture Learning System</span>
                        </Link>
                        <span className="details"><a href="">WPF</a> | <a href="">Xtion</a> | <a href="">Raspberry Pi 3</a></span>
                        <h4></h4>
                        <p></p>
                    </div>
                    <div className="single">
                        <a className="thumbnail" href="">
                            <span className="img">
                                <img src={temImage} alt="" />
                                <span className="seeDetail"><span className="more">See details &rarr;</span></span>
                            </span>
                            <span className="title">Lorem studios - interior and patio design</span>
                        </a>
                        <span className="details"><a href="">None</a> | <a href="">None</a></span>
                        <h4></h4>
                        <p></p>
                    </div>
                </div>
            </div>
        );
    }

    changePage(v) {
        this.props.dispatch({ type: "CHANGE_PAGE", name: v });
    }
}

export default connect()(RecentWork);