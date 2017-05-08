import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Nav extends React.Component{

    constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.changePage = this.changePage.bind(this);
        this.state = { navStyle: "navbar navbar-default navbar-sticky" };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        this.navbar = ReactDOM.findDOMNode(this.refs.nav);
        this.navOffset = this.navbar.getBoundingClientRect().top;  
    }

    componentWillUpdate(){
        this.navOffset = this.props.navOffset;
    }

    render(){

        return (
            <nav ref="nav" className={this.state.navStyle}>
                <div className="nav-container">
                    <ul className="navbar-list">
                        <li><Link to="/" onClick={()=>{this.changePage('home')}}>Home</Link></li>
                        <li><Link to="/about" onClick={()=>{this.changePage('about')}}>About</Link></li>		
                        <li><Link to="/profolio" onClick={()=>{this.changePage('profolio')}}>Profolio</Link></li>		
                        <li><Link to="/contact" onClick={()=>{this.changePage('contact')}}>Contact</Link></li>		
                    </ul>
                </div>
            </nav>
        );
    }

    changePage(v){
        this.props.dispatch({type: "CHANGE_PAGE", name: v});
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

const mapStateToProps = (state) => {
    return {
        curPage: state.navReducer.curPage,
        navOffset: state.navReducer.navOffset
    }
}
export default connect(mapStateToProps)(Nav);