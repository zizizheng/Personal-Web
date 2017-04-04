import React from 'react';

export default class Footer extends React.Component{
    render(){
        return (
            <div>
                <footer id="footer">
                    <div className="follow-me-icons">
                        <a href=""><i className="fa fa-twitter fa-5x"></i></a>
                    </div>
                    <div className="follow-me-icons">
                        <a href=""><i className="fa fa-dribbble fa-5x"></i></a>
                    </div>
                    <div className="follow-me-icons">
                        <a href=""><i className="fa fa-github fa-5x"></i></a>
                    </div>
                    <div className="follow-me-icons">
                        <a href=""><i className="fa fa-facebook fa-5x"></i></a>
                    </div>
                </footer>
                <footer id="underfooter">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 widget">
                                <div className="widget-body">
                                    <p className="text-center">
                                    Copyright &copy; 2017, ZiZi Zheng&nbsp;&nbsp;&nbsp; Design: <a href="http://www.gettemplate.com" rel="designer">Initio by GetTemplate</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer> 
            </div>
           
        );
    }
}  
  