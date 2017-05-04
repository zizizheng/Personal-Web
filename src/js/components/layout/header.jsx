import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';

import myself from '../../../assets/images/myself.jpg';



class Header extends React.Component{

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
        if(this.props.curPage !== 'home') window.removeEventListener('scroll', this.handleScroll);
        else window.addEventListener('scroll', this.handleScroll);

        switch(this.props.curPage){
            case 'home':
                return (
                    <header id="header" ref="header" className="home">
                        <div id="head" ref="head" className="parallax">
                            <h1 id="logo">
                                <img className="img-circle" src={myself} alt="personal" />
                                <span className="title">ZiZi Zheng</span>
                                <span className="tagline">A beginner for Web, full of passion for new things<br/></span>
                                <span className="tagline">
                                    <Link to="/contact#respond">z0931752096@gmail.com</Link>
                                </span>
                            </h1>
                        </div>
                    </header>
                );

            default:
                return (
                    <header id="header" ref="header">
                        <div id="head" ref="head" className="parallax text-center" style={this.state}>
                            <h1 className="title">ZiZi Zheng</h1>
                            <span className="tagline">A beginner for Web, full of passion for new things<br/></span>
                            <span className="tagline">
                                <Link to="/contact#respond">z0931752096@gmail.com</Link>
                            </span>
                        </div>
                    </header>
                );
        }
        
    }
    
    handleScroll(){
        let speed = document.getElementById('head').getAttribute('parallax-speed');
        if(speed){ 
            let bg_position = '-' + (window.pageYOffset / speed) + 'px';
            this.setState({backgroundPosition: 'center ' + bg_position});
        }
    }
}

const mapStateToProps = (state) => {
    return {
        curPage: state.navReducer.curPage
    }
}

export default connect(mapStateToProps)(Header);