import React, { Component } from 'react';

import archi from '../../../assets/images/profilio/dissert/architecture.png';
import xtion from '../../../assets/images/profilio/dissert/xtion.jpg';
import raspberry from '../../../assets/images/profilio/dissert/raspberry.png';
import wpf from '../../../assets/images/profilio/dissert/wpf.png';
import filezilla from '../../../assets/images/profilio/dissert/filezilla.png';
import xtion_m from '../../../assets/images/profilio/dissert/xtion_m.jpg';
import raspberry_m from '../../../assets/images/profilio/dissert/raspberry_m.jpg';
// import wpf_m from '../../../assets/images/profilio/dissert/wpf_m.png';
import filezilla_m from '../../../assets/images/profilio/dissert/filezilla_m.jpg';
import kinect from '../../../assets/images/profilio/dissert/kinect.png';
import openni from '../../../assets/images/profilio/dissert/openni.png';
import nite from '../../../assets/images/profilio/dissert/nite.png';
import opencv from '../../../assets/images/profilio/dissert/opencv.png';
import debian from '../../../assets/images/profilio/dissert/debian.png';
import kinectsdk from '../../../assets/images/profilio/dissert/kinectsdk.png';
import c from '../../../assets/images/profilio/dissert/c.png';
import c_plusplus from '../../../assets/images/profilio/dissert/c_plusplus.png';
import c_sharp from '../../../assets/images/profilio/dissert/c_sharp.png';
import demo from '../../../assets/images/profilio/dissert/demo.png';
import layer from '../../../assets/images/profilio/dissert/layer.png';

class Dissert extends Component {
    // showImg = [
    //     <img src={archi} />,
    //     <img src={archi} />,
    //     <img src={archi} />
    // ];

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

                <Architecture />

                <Details />

                <Demo />
                {/*{this.Showcase()}*/}
            </article>
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

function Architecture() {
    return (
        <div className="topspace">
            <h2 className="section-title"><span>Architecture</span></h2>
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
                        A server is built on a PC as the remote database by using <i>FileZilla Server <img src={filezilla} alt="filezilla" /></i>. All the motion data, modules and information in the proposed system would be stored in the server. Besides, Transformer can process and transform image streams into specific data set for ProTI, and it will be done on the server side.

                    </p>
                </li>
            </ul>
        </div>
    );
}

function Details() {
    return (
        <div className="topspace">
            <h2 className="section-title"><span>Environment Details</span></h2>
            <h3><i>Hardware</i></h3>
            <section>
                <div className="shadow">
                    <img src={xtion_m} alt="xtion meddium" />
                    <p className="no-style">Xtion Pro Live</p>
                </div>
                <div className="shadow">
                    <img src={kinect} alt="kinect" />
                    <p className="no-style">Kinect v1</p>
                </div>
                <div className="shadow">
                    <img src={raspberry_m} alt="raspberry" />
                    <p className="no-style">Raspbery PI 3</p>
                </div>
            </section>
            <h3><i>Software</i></h3>
            <section>
                <div className="shadow">
                    <img src={openni} alt="openni" />
                    <p className="no-style">OpenNI (SDK 2)</p>
                </div>
                <div className="shadow">
                    <img src={nite} alt="nite" />
                    <p className="no-style">NiTE (Middleware)</p>
                </div>
                <div className="shadow">
                    <img src={debian} alt="debian" />
                    <p className="no-style">Debian (OS)</p>
                </div>
                <div className="shadow">
                    <img src={opencv} alt="opencv" />
                    <p className="no-style">OpenCV</p>
                </div>
                <div className="shadow">
                    <img src={filezilla_m} alt="filezilla" />
                    <p className="no-style">FileZilla Server</p>
                </div>
                <div className="shadow">
                    <img src={kinectsdk} alt="kinect sdk" />
                    <p className="no-style">Kinect SDK</p>
                </div>
            </section>
            <h3><i>Language</i></h3>
            <section>
                <div className="shadow">
                    <img src={c} alt="C" />
                    <p className="no-style">C</p>
                </div>
                <div className="shadow">
                    <img src={c_plusplus} alt="C++" />
                    <p className="no-style">C++</p>
                </div>
                <div className="shadow">
                    <img src={c_sharp} alt="C#" />
                    <p className="no-style">C#</p>
                </div>
            </section>
        </div>
    );
}

function Demo() {
    return (
        <article className="topspace">
            <h2 className="section-title"><span>Demostration</span></h2>
            <div>
                <img src={layer} alt="ITETS 3 Layers" className="thumbnail" />
                <p>
                    ITETS impelments the <a href="https://www.researchgate.net/figure/274718805_fig3_Fig-3-The-three-layer-IoT-architecture" target="_blank"><i>three-layer IoT architecture</i></a>. which is :
                </p>
                <ul>
                    <li><strong>Perception Layer</strong>: RGB-D sensor</li>
                    <li><strong>Network Layer</strong>: Capturer</li>
                    <li><strong>Application Layer</strong>: Professional Technical Interface</li>
                </ul>
                <p>
                    RGB-D sensor captures user's motion and send to Capturer, then the Capturer will send those information by Wi-Fi to the server. The data will be processed on the server and store in the database, then users like professional or case manager can use Professional Technical Interface to operate data.
                </p>
            </div>
            <div className="clearfix">
                <img src={demo} alt="demo" className="thumbnail" />
                <p>
                    The system provides an interface called <strong>Professional Technical Interface</strong> ( hereinafter as <i>ProTI</i> ). All the motion data and training modules will be stored in remote server, and ProTI is designed to examine these information. <br />
                    ProTI has two major mode:
                </p>
                <ol>
                    <li><strong>Mark Keypose:</strong>
                        <p>For professionals to create training modules and mark the specific postures in exercise.</p>
                    </li>
                    <li><strong>Compare Posture:</strong>
                        <p>For comparing user's data with training module, figuring out the diference and giving suggestions.</p>
                    </li>
                </ol>
                <p>
                    ProTI provdies two views of a single recording, and it can be expanded to multiple views if neccessary. <strong>Skeleton</strong> is the key of comparison, which is used to recongize the difference between data and modules. The two images above the UI are shown user's motion, while the training module is shown on the other two images below. To examine the difference and the details between these images, user can realize how to do it better and what should be corrected.
                </p>
            </div>

        </article>
    );
}

export default Dissert;