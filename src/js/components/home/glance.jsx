import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';

import myself from '../../../assets/images/myself.jpg';

class Glance extends Component {
    constructor(){
        super();
        this.changePage = this.changePage.bind(this);
    }

    render() {
        return (
            <div className="featured topspace">
                <h2 className="section-title"><span>Glance</span></h2>
                <div id="glance" className="wrapper">
                    <div className="myPhoto">
                        <img src={myself} alt="personal" />
                    </div>
                    <div className="descripition">
                        <h3 className="lead">My name is ZiZi Zheng<br /></h3>
                        <div className="content">
                            <h4 className="lead">I'm a</h4>
                            <div>
                                <p className="lead"><strong>Programer</strong> since senior high (JavaScript, Html5, CSS3, C++, C#)</p>
                                <p className="lead"><strong>Volleyball</strong> lover, usually play wing spiker in game</p>
                                <p className="lead"><strong>Music</strong> mania, play acoustic and eletric guitar</p>
                                <p className="lead"><strong>Gamer</strong>, and played lots of game since childhood</p>
                            </div>
                            <Link to='/about#main' className="more-link" onClick={()=> this.changePage('about')}>more about me</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    changePage(v){
        this.props.dispatch({type: "CHANGE_PAGE", name: v});
    }
}

export default connect()(Glance);