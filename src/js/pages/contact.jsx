import React from 'react';

import fbImage from '../../assets/images/fb.png';
import googleImage from '../../assets/images/google.jpg';
import leetcodeImage from '../../assets/images/leetcode.png';
import igImage from '../../assets/images/instagram.png';
import gitImage from '../../assets/images/github.png';


export default class Contact extends React.Component {

    constructor(){
        super();
        this.timeout = [];
        this.state = {
            message: 'Mouse over to see some message about icon',
            curHover: 'none'
        };
        this.message = {
            'fb': 'Chat with me by using private message, I will respond as soon as I can',
            'google': 'I commonly use Gmail, please send me an email and start our conversation',
            'ig': 'Here are some of my personal photo, but it\'s private now...',
            'gh': 'Source code including Foodhub and this website are stored on the github, feel free to leave your comments and discuss with me',
            'leet': 'Sometimes I practice algorithm on Leetcode to make my logical of thinking'
        }
        this.onHover = this.onHover.bind(this);
    }

    render(){
        return (
            <main id="main">

                <div className="container">

                    <div id="contactBlock">
                        <h3 className="page-title text-center">
                            Wanna know more about me or Chat with me ? <br /> </h3>
                        <h3 className="page-title text-center">
                            You can find my trace in the following commiunities and websites
                        </h3>
                        
                        <container className="topspace">
                            <a href="https://www.facebook.com/zizi.zheng.1" target="_blank" >
                                <img id="fbImg" className="animated pulse" src={fbImage} alt="fb icon" onMouseOver={() => this.onHover('fb')} />
                            </a>
                            <a href="https://plus.google.com/u/0/111683413001408758628" target="_blank">
                                <img id="gooImg" className="animated pulse" src={googleImage} alt="google icon" onMouseOver={() => this.onHover('google')}/>
                            </a>
                            <a href="https://www.instagram.com/zizi_bartz/" target="_blank">
                                <img className="animated pulse" src={igImage} alt="instagram icon" onMouseOver={() => this.onHover('ig')}/>
                            </a>
                            <a href="https://github.com/zizizheng" target="_blank">
                                <img className="animated pulse" src={gitImage} alt="github icon" onMouseOver={() => this.onHover('gh')}/>
                            </a>
                            <a href="https://leetcode.com/zizizheng/" target="_blank">
                                <img id="leetImg" className="animated pulse" src={leetcodeImage} alt="leetcode icon" onMouseOver={() => this.onHover('leet')}/>
                            </a>
                        </container>
                        
                        <div className="message">
                            <span className="lead">{ this.state.message }</span>
                        </div>

                    </div>

                </div>

            </main>
        );
    }

    onHover(s){
        if (this.state.curHover === s) return ;

        this.setState({curHover: s});
        this.timeout.forEach((t)=>{ clearTimeout(t) });
        this.timeout = [];
        let output = '', to;
        for (let i = 0; i < this.message[s].length; i++){
            //eslint-disable-next-line
            to = setTimeout(() => {
                output += this.message[s][i];                
                this.setState({message: output});
            },  i * 30);
            this.timeout.push(to);
        }
    }
}