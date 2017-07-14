import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';

import myself from '../../../assets/images/myself.jpg';

class Glance extends Component {
    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);
    }

    render() {
        return (
            <div className="featured topspace">
                <h2 className="section-title"><span>Brief Intro</span></h2>
                <div id="glance" className={"wrapper " + this.props.style}>
                    <div className="myPhoto">
                        <img src={myself} alt="personal" />
                    </div>
                    <div className="descripition">
                        <h3 className="lead">我的名字是鄭宗霖，我是個<br /></h3>
                        <div className="content">
                            <div>
                                <p className="lead indent"><strong>程式設計師</strong>，從高中便開始接觸程式</p>
                                <p className="lead indent"><strong>排球愛好者</strong>，通常是打主攻手的位置</p>
                                <p className="lead indent"><strong>音樂份子</strong>，會彈奏電吉他與木吉他</p>
                                <p className="lead indent"><strong>電玩宅男</strong>，喜歡玩各種不同的遊戲</p>
                            </div>
                            <Link to='/about#main' className="more-link" onClick={() => this.changePage('about')}>more about me...</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    changePage(v) {
        this.props.dispatch({ type: "CHANGE_PAGE", name: v });
    }

    inEnglish() {
        <div className="descripition">
            <h3 className="lead">My name is ZiZi Zheng<br /></h3>
            <div className="content">
                <div>
                    <p className="lead indent">A <strong>Programer</strong> since senior high (JavaScript, Html5, CSS3, C++, C#)</p>
                    <p className="lead indent">A <strong>Volleyball</strong> lover, usually play wing spiker in game</p>
                    <p className="lead indent">A <strong>Music</strong> mania, play acoustic and eletric guitar</p>
                    <p className="lead indent">A <strong>Homebuddy</strong>, play lots of game since childhood</p>
                </div>
                <Link to='/about#main' className="more-link" onClick={() => this.changePage('about')}>more about me</Link>
            </div>
        </div>
    }
}

export default connect()(Glance);