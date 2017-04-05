import React from 'react';

import fbImage from '../../assets/images/fb.png';
import googleImage from '../../assets/images/google.jpg';
import leetcodeImage from '../../assets/images/leetcode.png';
import igImage from '../../assets/images/instagram.png';
import gitImage from '../../assets/images/github.png';


export default class Contact extends React.Component {
    render(){
        return (
            <main id="main">

                <div className="container">

                    <div id="contactBlock" className="text-center">
                        <h3 className="page-title">Wanna know more about me or Chat with me ? <br /></h3>
                        <h3 className="page-title">You can find my trace in the following commiunities and websites</h3>
                        <container className="topspace">
                            <a href="https://www.facebook.com/zizi.zheng.1" target="_blank">
                                <img id="fbImg" className="animated pulse" src={fbImage} alt="fb icon" />
                            </a>
                            <a href="https://plus.google.com/u/0/111683413001408758628" target="_blank">
                                <img id="gooImg" className="animated pulse" src={googleImage} alt="google icon" />
                            </a>
                            <a href="https://www.instagram.com/zizi_bartz/" target="_blank">
                                <img className="animated pulse" src={igImage} alt="instagram icon" />
                            </a>
                            <a href="https://github.com/zizizheng" target="_blank">
                                <img className="animated pulse" src={gitImage} alt="github icon" />
                            </a>
                            <a href="https://leetcode.com/zizizheng/" target="_blank">
                                <img id="leetImg" className="animated pulse" src={leetcodeImage} alt="leetcode icon" />
                            </a>
                        </container>

                    </div>

                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">

                            <div id="respond">
                                <h3 className="page-title text-center">Or you can just send me an email</h3>
                                <form action="" method="post" id="commentform" className="">
                                    <div className="form-group">
                                        <label for="inputName">Name</label>
                                        <input type="text" className="form-control" id="inputName" placeholder="Enter your name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail">Email address <i className="text-danger">*</i></label>
                                        <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="inputWeb">Website</label>
                                        <input type="nane" className="form-control" id="inputWeb" placeholder="http://" />
                                    </div>
                                    <div className="form-group">
                                        <label for="inputComment">Comment</label>
                                        <textarea className="form-control" rows="6"></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-offset-8 col-md-4 text-right">
                                            <button type="submit" className="btn btn-action">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>

                </div>

            </main>
        );
    }
}