import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import Layout from './js/pages/layout';
import Footer from './js/pages/footer';
import Home from './js/pages/home';
import About from './js/pages/about';
import Portfolio from './js/pages/portfolio';
import Contact from './js/pages/contact';

import store from './js/store';

import './assets/css/styles.css';
import './js/facebook.js';

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Layout />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Footer />
            </div>
        </HashRouter>
    </Provider>,
    app
);