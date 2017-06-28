import React from 'react';
import SlideShow from './slideShow';
import { HashLink as Link } from 'react-router-hash-link';

import htmlImage from '../../../assets/images/icons/html5.png';
import cssImage from '../../../assets/images/icons/css3.png';
import jsImage from '../../../assets/images/icons/javascript.png';
import broswer from '../../../assets/images/icons/browser.png';
import guitar from '../../../assets/images/guitar.jpg';
import laptop from '../../../assets/images/icons/laptop.png';
import microchip from '../../../assets/images/icons/microchip.png';
import virus from '../../../assets/images/icons/virus.png';

export default class Skill extends React.Component {

    componentDidMount() {
        console.log(this.refs);
    }

    render() {
        return (
            <div id="skills" className="personal container">
                <div className="featured topspace">
                    <h2 className="section-title">
                        <span>Skills</span>
                        <ul id="skillsList">
                            <li><Link to="/about#web">Web Development</Link></li>
                            <li><Link to="/about#cs">Computer Science</Link></li>
                            <li><Link to="/about#music">Music</Link></li>
                        </ul>
                    </h2>

                    <h3 id="web" className="space-for-navigate__first"><i>Skills About Front End Web Development</i></h3>
                    <div className="skillRow wrapper">{this.webSkillList()}</div>

                    <h3 id="cs" className="space-for-navigate"><i>Other Skills About Computer Science</i></h3>
                    <div className="skillRow wrapper">{this.programSkillList()}</div>

                    <div className="skillRow wrapper">{this.MusicSKillList()}</div>
                </div>
            </div>

        );
    }

    webSkillList() {
        let webList = [
            {
                title: 'Html',
                src: htmlImage,
                alt: 'html5 icon',
                content: ['HTML5', 'MarkDown', 'Semantic HTML']
            },
            {
                title: 'CSS',
                src: cssImage,
                alt: 'css3 icon',
                content: ['CSS3', 'SASS(SCSS)', 'Bootstrap 3', 'Responsive Web Design', 'Single Page Application']
            },
            {
                title: 'Javascript',
                src: jsImage,
                alt: 'javascript icon',
                content: ['JSX', 'React', 'Angular', 'TypeScript', 'JavaScript ES6']
            },
            {
                title: 'Others',
                src: broswer,
                alt: 'toolkit icon',
                content: ['Git', 'Webpack', 'Angular-cli', 'RESTful API Design', 'Chrome Developer Tools'],
                author: 'Icons made by Freepik http://www.flaticon.com is licensed by CC 3.0 BY'
            }
        ];
        let content = [];
        [...webList].map((skill, index) => {
            content.push(
                <div className="skillBlock" key={index}>
                    <div className="title">
                        <img src={skill.src} alt={skill.alt} />
                        <h3>{skill.title}</h3>
                    </div>
                    <hr />
                    <ul>{[...skill.content].map((c, index) => {
                        return (<li key={c + index}>{c}</li>);
                    })}
                    </ul>
                </div>
            );
            return null;
        });
        return content;
    }

    programSkillList() {
        let programList = [
            {
                title: 'Language',
                src: laptop,
                alt: 'language icon',
                content: ['C#', 'Xaml', 'Java', 'Xml', 'C / C++'],
                sub: ['WPF', 'WPF', 'Android App', 'Android App', ''],
                author: 'Icons made by Freepik from http://www.flaticon.com is licensed by CC 3.0 BY'
            },
            {
                title: 'Hardware',
                src: microchip,
                alt: 'hardware icon',
                content: ['Arduino', 'Raspberry Pi', 'Kinect', 'Xtion Pro Live'],
                sub: ['Uno', '2 & 3', '1 & 2', ''],
                author: 'Icons made by Pixel perfect from http://www.flaticon.com is licensed by CC 3.0 BY'
            },
            {
                title: 'Others',
                src: virus,
                alt: 'others icon',
                content: ['UML', 'OpenCV', 'EmguCV', 'MatLab'],
                sub: ['', '', '', ''],
                author: 'Icons made by Vectors Market http://www.flaticon.com is licensed by CC 3.0 BY'
            }
        ];
        let content = [];

        [...programList].map((skill, index) => {
            let items = [];
            for (let i = 0; i < skill.content.length; i++) {
                let c = skill.content[i];
                items.push(<li key={c + '-' + i}>{c}<span>{skill.sub[i]}</span></li>);
            }
            content.push(
                <div className="skillBlock" key={index}>
                    <div className="title">
                        <img src={skill.src} alt={skill.alt} title={skill.author} />
                        <h3>{skill.title}</h3>
                    </div>
                    <hr />
                    <ul>
                        {items}
                    </ul>
                </div>
            );
            return null;
        });
        return content;
    }

    MusicSKillList() {
        return (
            <div id="music" className="wrapper space-for-navigate">
                <article>
                    <h3><i>Can't Live Without Music</i></h3>
                    <p className="lead text-muted">Start playing acoustic guitar since the first grade in senior high school.<br />
                        In Sep 2014, my friends and I who are full of passion about music formed a band and start my road to eletric guitar. <br />
                        Our band called <a href="https://www.facebook.com/thebarpretender/" target="_blank"><strong>BarPretender</strong></a> and I play the lead guitar.
                    </p>
                </article>

                <div id="music-profile">
                    <img src={guitar} alt="I with my guitar" />
                </div>

                <SlideShow />
            </div>
        );
    }
}

