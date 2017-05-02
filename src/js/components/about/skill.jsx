import React from 'react';
import SlideShow from './slideShow';

import htmlImage from '../../../assets/images/html5.png';
import cssImage from '../../../assets/images/css3.png';
import jsImage from '../../../assets/images/javascript.png';
import toolImage from '../../../assets/images/toolkit.png';
import guitar from '../../../assets/images/guitar.jpg';

export default class Skill extends React.Component {
    constructor(props){
        super(props);
        this.showList = [];
    }

    render(){    
        this.showList = [];
        switch( this.props.skill ){
            case 'web':
                this.webSkillList();
                break;
            case 'program':
                this.programSkillList();
                break;
            case 'music':
                return (<MusicSKillList />);
            default:
                break;
        }
        return (<div className="skillRow">{this.showList}</div>);
    }

    webSkillList(){
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
                src: toolImage,
                alt: 'toolkit icon',
                content: ['Git', 'Webpack', 'Angular-cli', 'RESTful API Design', 'Chrome Developer Tools']
            }
        ];
        [...webList].map((skill, index)=> {
            this.showList.push(
                <div className="skillBlock" key={index}>
                    <div className="title">
                        <img src={skill.src} alt={skill.alt}/>
                        <h3>{skill.title}</h3>
                    </div>
                    <hr />
                    <ul>{[...skill.content].map((c, index) =>{
                            return (<li key={c + index}>{c}</li>);
                        })}
                    </ul>
                </div>
            );
            return null;
        });
    }

    programSkillList(){
        let programList = [
            {
                title: 'Language',
                src: '',
                alt: 'language icon',
                content: ['C#', 'Xaml', 'Java', 'Xml', 'C / C++'],
                sub: ['WPF', 'WPF', 'Android App', 'Android App', '']
            },
            {
                title: 'Hardware',
                src: '',
                alt: 'hardware icon',
                content: ['Arduino', 'Raspberry Pi', 'Kinect', 'Xtion Pro Live'],
                sub: ['Uno', '2 & 3', '1 & 2', '']
            },
            {
                title: 'Others',
                src: '',
                alt: 'others icon',
                content: ['UML', 'OpenCV', 'EmguCV', 'MatLab'],
                sub: ['', '', '', '']
            }
        ];

        [...programList].map((skill, index)=> {
            let items = [];
            for(let i = 0; i < skill.content.length; i++){
                let c = skill.content[i];
                items.push(<li key={c+'-'+i}>{c}<span>{skill.sub[i]}</span></li>);
            }
            this.showList.push (
                <div className="skillBlock" key={index}>
                    <div className="title">
                        <img src={skill.src} alt={skill.alt}/>
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
    }

}

class MusicSKillList extends React.Component{   
    render(){
        return (
            <div>
                <div id="music" >
                    <div　id="musicDes" className="page-header">
                        <h3><i>Can't Live Without Music</i></h3>
                        <p className="lead text-muted">Start playing acoustic guitar since the first grade in senior high school.<br />
                            In Sep 2014, my friends and I who are full of passion about music formed a band and start my road to eletric guitar.
                            Our band called <a href="https://www.facebook.com/thebarpretender/" target="_blank"><strong>BarPretender</strong></a> and I play the lead guitar.
                        </p>
                    </div>
                    <div>
                        <img id="guitar" src={guitar} alt="I with guitar" />
                    </div>
                </div>

                <SlideShow />
                
            </div>
        );
        
    }
}