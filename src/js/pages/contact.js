import React from 'react';

import fbImage from '../../images/fb.png';
import googleImage from '../../images/google.jpg';
import leetcodeImage from '../../images/leetcode.png';
import igImage from '../../images/instagram.png';
import gitImage from '../../images/github.png';


export default class Contact extends React.Component {
    render(){
        return (
            <main id="main">

                <div className="container">

                    <div id="contactBlock" className="text-center">
                        <h3 className="page-title">Wanna know more about me or Chat with me ? <br /></h3>
                        <h3 className="page-title">You can find my trace in the following commiunities and websites</h3>
                        <container className="topspace">
                            <div>
                                <img id="fbImg" className="animated pulse" src={fbImage} alt="fb icon" />
                                <p id="fbP">
                                Send me a message and chat with message<br />
                                Then maybe we can become Facebook friend !
                                </p>
                            </div>
                            <div>
                                <a href=""><img id="gooImg" className="animated pulse" src={googleImage} alt="google icon" /></a>
                                <p id="gooP">
                                Rarely use for now<br />
                                But you still can contact me from google+
                                </p>
                            </div>
                            <img className="animated pulse" src={igImage} alt="instagram icon" />
                            <img className="animated pulse" src={gitImage} alt="github icon" />
                            <div>
                                <img id="leetImg" className="animated pulse" src={leetcodeImage} alt="leetcode icon" />
                                <p id="leetP">
                                Sometimes I would like to take some challenge in Leetcode <br />
                                It helps me rebuilding my logic and program skill
                                </p>
                            </div>
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