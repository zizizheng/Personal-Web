import React from 'react';

import Skill from '../components/about/skill';
import goodguy from '../../assets/images/goodguy.jpg';

export default class About extends React.Component {
    constructor() {
        super();
        this.state = { currentSkill: 'music' };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        return (
            <main id="main">
                <div id="profileInAbout" className="container wrapper">
                    <div className="aboutPhoto">
                        <img src={goodguy} alt="I'm a good guy" />
                    </div>
                    <article>
                        <header className="page-header">
                            <h1 className="page-title h1__margin">簡歷</h1>
                            <p className="lead">
                                鄭宗霖 (Zizi Zheng)，來自於台南<br />
                                對於新的科技充滿好奇以及探索的心 <br />
                                喜歡嘗試新的事物並在學習的過程找到自己的樂趣
                            </p>
                            <p className="lead">
                                在 2016 年八月開始學習網頁前端開發 <br />
                                目的在於學習一個新的語言，挑戰自己<br />
                                以下包含了我從古至今所學習到的技能，請繼續往下瀏覽<br />
                            </p>
                        </header>
                    </article>

                </div>
                <Skill />
            </main>
        );
    }


    inEnglish() {
        return (
            <article>
                <header className="page-header">
                    <h1 className="page-title h1__margin">Who I am ?</h1>
                    <p className="lead indent">
                        I'm ZiZi Zheng (Tsung-Lin Cheng), come from Tainan, Taiwan. <br />
                        Have a curious mind about technology. <br />
                        Like to try new things and have some fun when learning.
                            </p>
                    <p className="lead indent">
                        Start learning and developing Web in August, 2016. <br />
                        Aim to learn a new programing language and enhance myself.<br />
                        Scroll down to know more about <strong>Me</strong> now !
                            </p>
                </header>
            </article>
        );
    }

    /* ===== Event ===== */

    // skillClick(v, e){
    //     e.preventDefault(e);
    //     this.setState({ currentSkill: v});
    // }

    /* ===== Event End ===== */

}