import React from 'react';

import Intro from '../components/home/intro';
import Glance from '../components/home/glance';
import RecentWork from '../components/home/recentWork';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
        this.animated = "animated fadeIn show_content";
        this.state = {
            style: {
                intro: 'hide_content',
                glance: 'hide_content',
                recentwork: 'hide_content'
            }
        };
    }


    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.onScroll);
    }


    componentWillMount() {
        window.removeEventListener('scroll', this.onScroll);
    }


    render() {
        return (
            <main id="main">
                <div className="container">

                    <Intro style={this.state.style.intro} />

                    <Glance style={this.state.style.glance} />

                    <RecentWork style={this.state.style.recentwork} />
                </div>
            </main>
        );
    }

    onScroll(e) {
        let scrolltop = window.pageYOffset;
        if (scrolltop > 1000) {
            this.setState((preState) => {
                return { style: { ...preState.style, recentwork: this.animated } };
            });
        }
        else if (scrolltop > 500) {
            this.setState((preState) => {
                return { style: { ...preState.style, glance: this.animated } };
            });
        }
        if (scrolltop > 200) {
            this.setState((preState) => {
                return { style: { ...preState.style, intro: this.animated } };
            });
        }
    }

}



