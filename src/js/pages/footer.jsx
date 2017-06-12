import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="clearfix">
                <footer id="footer">
                    <div className="follow-me-icons">
                        <a href="https://www.facebook.com/zizi.zheng.1" target="_blank">
                            <i className="fa fa-facebook-square fa-5x"></i>
                        </a>
                    </div>
                    <div className="follow-me-icons">
                        <a href="https://plus.google.com/u/0/111683413001408758628" target="_blank">
                            <i className="fa fa-google-plus-square fa-5x"></i>
                        </a>
                    </div>
                    <div className="follow-me-icons">
                        <a href="https://www.instagram.com/zizi_bartz/" target="_blank">
                            <i className="fa fa-instagram fa-5x"></i>
                        </a>
                    </div>
                    <div className="follow-me-icons">
                        <a href="https://github.com/zizizheng" target="_blank">
                            <i className="fa fa-github-square fa-5x"></i>
                        </a>
                    </div>
                </footer>
                <footer id="underfooter">
                    <p className="text-center">
                        Copyright &copy; 2017, ZiZi Zheng&nbsp;&nbsp;&nbsp; Design: <a href="http://www.gettemplate.com" rel="designer">Initio by GetTemplate</a></p>
                </footer>
            </div>

        );
    }
}
