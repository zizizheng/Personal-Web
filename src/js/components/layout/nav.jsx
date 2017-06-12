import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.navbar = null;
        this.handleScroll = this.handleScroll.bind(this);
        this.changePage = this.changePage.bind(this);
        this.state = { navStyle: "navbar navbar-default navbar-sticky", active: 'home' };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.navOffset = this.navbar.getBoundingClientRect().top;
    }

    componentWillUpdate() {
        this.navOffset = this.props.navOffset;
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {

        return (
            <nav ref={(nav) => this.navbar = nav} className={this.state.navStyle}>
                <div className="nav-container">
                    <ul className="navbar-list">
                        <li>
                            <Link to="/" onClick={() => { this.changePage('home') }} className={this.state.active === 'home' ? 'active' : ''}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={() => { this.changePage('about') }} className={this.state.active === 'about' ? 'active' : ''}>About
                            </Link>
                        </li>
                        <li>
                            <Link to="/profolio" onClick={() => { this.changePage('profolio') }} className={this.state.active === 'profolio' ? 'active' : ''}>Profolio</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={() => { this.changePage('contact') }} className={this.state.active === 'contact' ? 'active' : ''}>Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

    changePage(v) {
        this.props.dispatch({ type: "CHANGE_PAGE", name: v });
        this.setState({ active: v });
    }

    handleScroll() {
        let curOffset = window.pageYOffset;
        if (curOffset > this.navOffset) {
            this.setState({ navStyle: "navbar navbar-default navbar-sticky stick" });
        }
        else {
            this.setState({ navStyle: "navbar navbar-default navbar-sticky" })
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