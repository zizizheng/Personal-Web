import React from 'react';
import ReactDOM from 'react-dom';

import Foodhub from '../components/profolio/foodhub';

export default class Profolio extends React.Component {

    constructor(){
        super();
        this.state = { curContent: <Foodhub />};
        this.curSelect = 'foodhub';
    }

    componentDidMount(){
        if( this.props.location.state ){
            this.changeContent(this.props.location.state.curPage);
        }
    }

    render(){

        return (
            <main id="main">

                <div id="profolio" className="container">

                    <div className="row topspace">
                        
                        <aside className="col-lg-2">

                            <ul ref="list" className="text-right nav-side">
                                <li ref="foodhub" className="active" >
                                    <a href="#" onClick={(e)=>{ this.changeContent('foodhub', e)}}>FoodHub</a>
                                </li>
                                <li ref="master">
                                    <a href="#" onClick={(e)=>{ this.changeContent('master', e)}}>Master Dissertion</a>
                                </li>
                                <li onClick={()=>{ this.changeContent()}}><a>Someting</a></li>
                                <li onClick={()=>{ this.changeContent()}}><a>oh shit</a></li>
                            </ul>

                        </aside>

                        {this.state.curContent}

                    </div>
                </div>
                
            </main>
        );
    }

    changeContent(v, e){
        if(e) e.preventDefault(e);
        if ( v === this.curSelect) return ;
        else {
            ReactDOM.findDOMNode(this.refs[this.curSelect]).removeAttribute('class');
            ReactDOM.findDOMNode(this.refs[v]).setAttribute('class', 'active');
            this.curSelect = v;
            switch(v){
            case 'foodhub':
                this.setState({curContent: <Foodhub />});
                break;
            case 'master':
                this.setState({curContent: <h3>Here should have the introducion of Master Dissertion</h3>});
                break;
            default:
                this.curContent = (<h3>Nothing remains</h3>);
                break;
            }
        }
    }

}
