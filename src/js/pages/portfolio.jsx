import React from 'react';

import Foodhub from '../components/portfolio/foodhub';
import Dissert from '../components/portfolio/dissert';

export default class Portfolio extends React.Component {

    constructor() {
        super();
        this.state = {
            curContent: '',
            curSelect: ''
        };

    }

    componentDidMount() {
        if (this.props.location.state) {
            this.changeContent(this.props.location.state.curPage);
        }
        window.scrollTo(0, 0);
        this.changeContent('foodhub');
    }

    render() {

        return (
            <main id="main">

                <div id="portfolio" className="container">
                    <aside>
                        <ul ref="list" className="text-right nav-side">
                            <li ref="foodhub" className={this.state.curSelect === 'foodhub' ? 'active' : ''}>
                                <a href="" onClick={(e) => { this.changeContent('foodhub', e) }}>FoodHub</a>
                            </li>
                            <li ref="dissertion" className={this.state.curSelect === 'dissertion' ? 'active' : ''}>
                                <a href="" onClick={(e) => { this.changeContent('dissertion', e) }}>Master Dissertion</a>
                            </li>
                        </ul>

                    </aside>
                    <div id="portfolio__content">
                        {this.state.curContent}
                    </div>
                </div>

            </main>
        );
    }

    changeContent(v, e) {
        if (e) e.preventDefault(e);
        if (v === this.state.curSelect) return;
        else {
            this.setState({ curSelect: v });
            switch (v) {
                case 'foodhub':
                    this.setState({ curContent: <Foodhub class="animated fadeIn" /> });
                    break;
                case 'dissertion':
                    this.setState({ curContent: <Dissert class="animated fadeIn" /> });
                    break;
                default:
                    this.curContent = (<h3>Nothing remains</h3>);
                    break;
            }
        }
    }

}
