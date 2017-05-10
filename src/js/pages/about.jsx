import React from 'react';

import Skill from '../components/about/skill';
import goodguy from '../../assets/images/goodguy.jpg';

export default class About extends React.Component {
    constructor(){
        super();
        this.state = { currentSkill: 'music'};
    }

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        
        return (
            <main id="main">
                <div id="profileInAbout" className="container wrapper">
                    <div className="aboutPhoto">
                        <img src={goodguy} alt="I'm a good guy" />
                    </div>

                    <article>
                        <header className="page-header">
                        <h1 className="page-title h1__margin">Who I am ?</h1>
                            <p className="lead indent">
                                I'm ZiZi Zheng (Tsung-Lin Cheng), come from Tainan, Taiwan. <br/>
                                Have a curious mind about technology. <br/>
                                Like to try new things and have some fun when learning.
                            </p>
                            <p className="lead indent">
                                Start learning and developing Web in August, 2016. <br/>
                                Aim to learn a new programing language and enhance myself.<br/>
                                Scroll down to know more about <strong>Me</strong> now !
                            </p>
                        </header>
                    </article>
                </div>
                <Skill />
            </main>
        );
    }



    /* ===== Event ===== */
    
    // skillClick(v, e){
    //     e.preventDefault(e);
    //     this.setState({ currentSkill: v});
    // }

    /* ===== Event End ===== */

}