import React, { Component } from 'react';
import Scroll from 'react-scroll';

import above from '../../../assets/images/icons/above.png';

class ToTop extends Component {
    render() {
        return (
            <div id="to-top" onClick={() => Scroll.animateScroll.scrollToTop()}>
                <img className="animated pulse infinite" src={above} alt="above img" />
            </div>
        );
    }
}

export default ToTop;