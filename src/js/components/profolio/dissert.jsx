import React, { Component } from 'react';

import archi from '../../../assets/images/profilio/dissert/architecture.png';
import xtion from '../../../assets/images/profilio/dissert/xtion.jpg';
import raspberry from '../../../assets/images/profilio/dissert/raspberry.png';
import wpf from '../../../assets/images/profilio/dissert/wpf.png';
import filezilla from '../../../assets/images/profilio/dissert/filezilla.png';
import xtion_m from '../../../assets/images/profilio/dissert/xtion_m.jpg';
import raspberry_m from '../../../assets/images/profilio/dissert/raspberry_m.jpg';
import wpf_m from '../../../assets/images/profilio/dissert/wpf_m.png';
import filezilla_m from '../../../assets/images/profilio/dissert/filezilla_m.jpg';

class Dissert extends Component {
    showImg = [
        <img src={archi} />,
        <img src={archi} />,
        <img src={archi} />
    ];

    render() {
        return (
            <article className={this.props.class}>
                <h1 className="title">I<span>o</span>T<span>-Based</span>&nbsp;
                    E<span>xercise</span>&nbsp;
                    T<span>raining</span>&nbsp;
                    S<span>ystem</span>
                </h1>
                <h2 className="subtitle">Learning from the details, becoming one of the professionals by youself</h2>
                <p><strong>ITETS</strong> stands for <i>IoT-Based Exercise Training System</i> which can help a user have standard postures and give assistance remotely. ITETS can record user motions when doing exercises and process the recorded images into skeleton information. Professionals in different kinds of exercises can also record their standard postures and create training modules, respectively. In order to provide a self-learning environment, an IoT object, called RGB-D Capturer, is applied in ITETS to build an in-home system for user.
                </p>

                {this.Architecture()}

                {this.Details()}
                {/*{this.Showcase()}*/}
            </article>
        );
    }

    Architecture() {
        return (
            <div>
                <h3><i>Architecture</i></h3>
                <img src={archi} alt="ITETS architecture" />
                <p className="topspace">ITETS is composed of three subsystems:</p>
                <ul>
                    <li>
                        <strong>Recording:</strong>
                        <p>
                            Discussing about IoT-Based System (Non-IoT is previous version). <br />
                            RGD-D Capturer (The IoT object of the system) will capture user's image and store as image streams, then send to the server for processing.
                            RGB-D Capturer is implemented with <i>Xtion Pro Live<img src={xtion} alt="xtion" /></i> and <i>Raspbery 3 <img src={raspberry} alt="raspberry" /></i>.
                        </p>
                    </li>
                    <li>
                        <strong>Technical Operations: Professionals & Case Manager</strong>
                        <p>
                            Professionals can use a technical interface, called Professional Technical Interface (ProTI) to create training module and figure out the error postures from user’s motion data. Case Managers can examine users’ record and arrange appreciate exercise tasks.
                            ProTI is a <i>Windows Presentation Foundation (WPF) <img src={wpf} alt="wpf" /></i> from Microsoft. It processes the motion data from user and provides graphical user interface for operating.
                        </p>
                    </li>
                    <li>
                        <strong>Storage: </strong>
                        <p>
                            A server is built on a PC as the remote database by using <i>FileZilla Server <img src={filezilla} /></i>. All the motion data, modules and information in the proposed system would be stored in the server. Besides, Transformer can process and transform image streams into specific data set for ProTI, and it will be done on the server side.

                        </p>
                    </li>
                </ul>
            </div>
        );
    }

    Details() {
        return (
            <div>
                <h3><i>Development Details</i></h3>
                <div className="detailBlock">
                    <img src={xtion_m} alt="xtion meddium" />
                    <p>
                        blalala
                        slslldaskkd;asd
                        as;ldkopwepaskfsdfjsdlfl
                    </p>
                </div>
                <div className="detailBlock">
                    <img src={raspberry_m} alt="raspberry" />
                    <p></p>
                </div>
                <div className="detailBlock">
                    <img src={wpf_m} alt="wpf" />
                    <p></p>
                </div>
                <div className="detailBlock">
                    <img src={filezilla_m} alt="filezilla" />
                    <p></p>
                </div>
            </div>
        );
    }

    Showcase() {

        return (
            <div id="showcase">
                {this.showImg}
            </div>
        );
    }
}

export default Dissert;