import React, { Component } from 'react';
import Scroll from 'react-scroll';

import above from '../../../assets/images/icons/above.png';

class ToTop extends Component {
    constructor(props) {
        super(props);
        this.state = { style: { display: 'none' } };
        this.pageSroll = this.pageScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.pageSroll);
    }

    render() {
        return (
            <div id="to-top" onClick={() => Scroll.animateScroll.scrollToTop()} style={this.state.style}>
                <img className="animated pulse infinite" src={above} alt="to top img" />
            </div>
        );
    }

    pageScroll() {
        const display = (window.pageYOffset === 0) ? "none" : "flex";
        this.setState({ style: { display: display } });
    }
}

export default ToTop;