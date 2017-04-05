import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import Layout from './js/pages/layout';
import Footer from './js/pages/footer';
import Home from './js/pages/home';
import About from './js/pages/about';
import Profolio from './js/pages/profolio';
import Contact from './js/pages/contact';

import './assets/css/bootstrap.min.css';
import './assets/css/styles.css';

const app = document.getElementById('app');

ReactDOM.render(
    <HashRouter>
        <div>
            <Layout />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profolio" component={Profolio} />
            <Route path="/contact" component={Contact} />            
            <Footer />
        </div>
    </HashRouter>,
    app
);