import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component{

    constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.state = { navStyle: "navbar navbar-default navbar-sticky" };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        this.navbar = ReactDOM.findDOMNode(this.refs.nav);
        this.navOffset = this.navbar.getBoundingClientRect().top;
    }


    render(){
        return (
            <nav ref="nav" className={this.state.navStyle}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>		
                            <li><Link to="/profolio">Profolio</Link></li>		
                            <li><Link to="/contact">Contact</Link></li>		
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

    handleScroll(){
        let curOffset = window.pageYOffset;
        if( curOffset > this.navOffset ){
            this.setState({ navStyle: "navbar navbar-default navbar-sticky stick" });
        }
        else {
            this.setState({ navStyle: "navbar navbar-default navbar-sticky"})
        }
        // console.log(this.navOffset + '   ' + curOffset);
    }


}
