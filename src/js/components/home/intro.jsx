import React from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';

class Intro extends React.Component{
    constructor(){
        super();
        this.changePage = this.changePage.bind(this);
    }

    render(){
        return (
            <div className="intro">
                <div>
                    <p className="lead text-muted text-center">
                        Hi, this is my personal page.<br />
                        Self-introduction is presented in 
                        <Link to="/about" onClick={()=> this.changePage('about')}> About</Link>, including my programing skills and my personal experience.<br />
                        <Link to="/profolio" onClick={()=> this.changePage('profolio')}>Profolio</Link> shows the recent works I have done, and the introduction of my master's dissertation.<br />
                        <Link to="/contact" onClick={()=> this.changePage('contact')}>Contact</Link> contains any information that can contact me, please check it.<br />
                    </p>
                    <p className="lead text-center"><strong>Hope You Enjoy!</strong></p>
                </div>
            </div>
        );
    }

    changePage(v){
        this.props.dispatch({type: "CHANGE_PAGE", name: v});
    }
}

export default connect()(Intro);