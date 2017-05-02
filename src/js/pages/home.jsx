import React from 'react';

import Intro from '../components/home/intro';
import Glance from '../components/home/glance';
import RecentWork from '../components/home/recentWork';

export default class Home extends React.Component {
    render(){
        return (
            <main id="main">
                <div className="container">
                    
                   <Intro />

                    <Glance />

                    <RecentWork />
                </div>
            </main>
        );
    }
}



