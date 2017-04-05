import React from 'react';

import Skill from '../components/about/skill';
import goodguy from '../../assets/images/goodguy.jpg';

export default class About extends React.Component {
    constructor(){
        super();
        this.state = { currentSkill: 'music'};
        this.skillClick = this.skillClick.bind(this);
    }

    render(){
        
        return (
            <main id="main">
                <div id="profile" className="container">

                    <img src={goodguy} alt="I'm a good guy" />

                    <article>
                        <header className="page-header">
                        <h1 className="page-title">Who I am ?</h1>
                            <p className="lead">
                                I'm ZiZi Zheng (Tsung-Lin Cheng), come from Tainan, Taiwan. <br/>
                                Have a curious mind about technology. <br/>
                                Like to try new things and have some fun when learning.
                            </p>
                            <p className="lead">
                                Start learning and developing Web in August, 2016. <br/>
                                Aim to learn a new programing language and enhance myself.<br/>
                                Scroll down to know more about <strong>Me</strong> now !
                            </p>
                        </header>
                    </article>
                </div>
                <div id="skills" className="personal container">
                <div className="row featured topspace">
                    <h2 className="section-title">
                        <span>Skills</span>
                        <ul id="skillsList">
                            <li><a href="#" onClick={(e)=> this.skillClick('web', e)}>About Web</a></li>
                            <li><a href="#" onClick={(e)=> this.skillClick('program', e)}>Program Language</a></li>
                            <li><a href="#" onClick={(e)=> this.skillClick('music', e)}>Music</a></li>
                        </ul>
                    </h2>

                    <article>
                        <Skill skill={this.state.currentSkill} />
                    </article>

                </div>
                </div>
            </main>
        );
    }



    /* ===== Event ===== */
    
    skillClick(v, e){
        e.preventDefault(e);
        this.setState({ currentSkill: v});
    }

    /* ===== Event End ===== */

}