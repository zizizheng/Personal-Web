import React from 'react';
import ReactDOM from 'react-dom';

import myself from '../../../images/myself.jpg';

export default class Header extends React.Component{

    constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.state = { };
    }

    componentDidMount(){
        let headEle = ReactDOM.findDOMNode(this.refs.head);
        headEle.setAttribute('parallax-speed', '2');
        window.addEventListener('scroll', this.handleScroll);
    }

    render(){

        return (
            <header id="header" ref="header" className="home">
                <div id="head" ref="head" className="parallax" style={this.state}>
                    <h1 id="logo" className="text-center">
                        <img className="img-circle" src={myself} alt="personal image" />
                        <span className="title">ZiZi Zheng</span>
                        <span className="tagline">A beginner for Web, full of passion for new things<br/></span>
                        <span className="tagline"><a href="">z0931752096@gmail.com</a></span>
                    </h1>
                </div>
            </header>
        );
    }
    
    handleScroll(){
        let speed = document.getElementById('head').getAttribute('parallax-speed');
        if(speed){ 
            let bg_position = '-' + (window.pageYOffset / speed) + 'px';
            this.setState({backgroundPosition: 'center ' + bg_position});
        }
    }
}