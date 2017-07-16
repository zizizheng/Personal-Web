import React, { Component } from 'react';

import archi from '../../../assets/images/portfolio/dissert/architecture.png';
import xtion from '../../../assets/images/portfolio/dissert/xtion.jpg';
import raspberry from '../../../assets/images/portfolio/dissert/raspberry.png';
import wpf from '../../../assets/images/portfolio/dissert/wpf.png';
import filezilla from '../../../assets/images/portfolio/dissert/filezilla.png';
import xtion_m from '../../../assets/images/portfolio/dissert/xtion_m.jpg';
import raspberry_m from '../../../assets/images/portfolio/dissert/raspberry_m.jpg';
// import wpf_m from '../../../assets/images/portfolio/dissert/wpf_m.png';
import filezilla_m from '../../../assets/images/portfolio/dissert/filezilla_m.jpg';
import kinect from '../../../assets/images/portfolio/dissert/kinect.png';
import openni from '../../../assets/images/portfolio/dissert/openni.png';
import nite from '../../../assets/images/portfolio/dissert/nite.png';
import opencv from '../../../assets/images/portfolio/dissert/opencv.png';
import debian from '../../../assets/images/portfolio/dissert/debian.png';
import kinectsdk from '../../../assets/images/portfolio/dissert/kinectsdk.png';
import c from '../../../assets/images/portfolio/dissert/c.png';
import c_plusplus from '../../../assets/images/portfolio/dissert/c_plusplus.png';
import c_sharp from '../../../assets/images/portfolio/dissert/c_sharp.png';
import demo from '../../../assets/images/portfolio/dissert/demo.png';
import layer from '../../../assets/images/portfolio/dissert/layer.png';

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
                <p><strong>ITETS</strong> 為 <em>IoT-Based Exercise Training System</em> 的縮寫，目的為提供使用者一個在家中就可以使用的運動標準姿勢訓練系統，並且可由專業人士由遠端進行協助。ITETS 能將使用者運動時的動作記錄下來，經由系統分析後產生彩色以及骨架資訊，並且與系統內已經建立好的訓練模組進行比對，同時由專業人士給予適當的建議。為了建立家中自學的環境，我們設計了一項 IoT 物件，名稱為 "RGB-D Capturer"，以達到在家中部署環境的目的。
                </p>

                <Architecture />

                <Details />

                <Demo />
            </article>
        );
    }

}

function Architecture() {
    return (
        <div className="topspace">
            <h2 className="section-title"><span>系統架構</span></h2>
            <img src={archi} alt="ITETS architecture" />
            <p className="topspace no-indent">ITETS 由三個子系統組成：</p>
            <ul>
                <li>
                    <strong>Recording：</strong>
                    <p>
                        以下將探討 IoT-Based System （Non-IoT 是先前的版本） <br />
                        RGD-D Capturer （系統中的 IoT object）會捕捉使用者的動作，並將其儲存為純影像流，此影像流會被送至伺服器進行分析。
                        RGB-D Capturer 由 <i>Xtion Pro Live<img src={xtion} alt="xtion" /></i> 以及 <i>Raspbery 3 <img src={raspberry} alt="raspberry" /></i> 所組成。
                    </p>
                </li>
                <li>
                    <strong>Technical Operations： Professionals & Case Manager</strong>
                    <p>
                        ITETS 提供一個操作平台供專業人士以及專案管理人使用，我們稱它為 Professional Technical Interface ( ProTI )。ProTI 可建立各項運動的標準姿勢訓練模組，以及比較訓練模組和經過處理後的使用者運動資料的差異。ProTI 以 <em>Windows Presentation Foundation (WPF) <img src={wpf} alt="wpf" /></em> 的形式設計，能在微軟系統環境下運作，給予使用者圖像化的操作介面。
                    </p>
                </li>
                <li>
                    <strong>Storage： </strong>
                    <p>
                        ITETS 使用<em>FileZilla Server </em><img src={filezilla} alt="filezilla" />在一般電腦上建立簡易的伺服器，並儲存所有訓練模組以及使用者的資料。當使用者資料流傳至伺服器後，名為 Transfomer 的轉換程式會自動將上傳好的資料轉換成系統所需的資料格式，使其能在 ProTI 上運作並與訓練模組比對。
                    </p>
                </li>
            </ul>
        </div>
    );
}

function Details() {
    return (
        <div className="topspace">
            <h2 className="section-title"><span>開發環境及工具</span></h2>
            <h3><i>硬體</i></h3>
            <section className="equip">
                <div className="shadow">
                    <img src={xtion_m} alt="xtion meddium" />
                    <p>Xtion Pro Live</p>
                </div>
                <div className="shadow">
                    <img src={kinect} alt="kinect" />
                    <p>Kinect v1</p>
                </div>
                <div className="shadow">
                    <img src={raspberry_m} alt="raspberry" />
                    <p>Raspbery PI 3</p>
                </div>
            </section>
            <h3><i>軟體</i></h3>
            <section className="equip">
                <div className="shadow">
                    <img src={openni} alt="openni" />
                    <p>OpenNI (SDK 2)</p>
                </div>
                <div className="shadow">
                    <img src={nite} alt="nite" />
                    <p>NiTE (Middleware)</p>
                </div>
                <div className="shadow">
                    <img src={debian} alt="debian" />
                    <p>Debian (OS)</p>
                </div>
            </section>
            <section className="equip">

                <div className="shadow">
                    <img src={opencv} alt="opencv" />
                    <p>OpenCV</p>
                </div>
                <div className="shadow">
                    <img src={filezilla_m} alt="filezilla" />
                    <p>FileZilla Server</p>
                </div>
                <div className="shadow">
                    <img src={kinectsdk} alt="kinect sdk" />
                    <p >Kinect SDK</p>
                </div>
            </section>
            <h3><i>程式語言</i></h3>
            <section className="equip">
                <div className="shadow">
                    <img src={c} alt="C" />
                    <p>C</p>
                </div>
                <div className="shadow">
                    <img src={c_plusplus} alt="C++" />
                    <p>C++</p>
                </div>
                <div className="shadow">
                    <img src={c_sharp} alt="C#" />
                    <p>C#</p>
                </div>
            </section>
        </div>
    );
}

function Demo() {
    return (
        <article className="topspace">
            <h2 className="section-title"><span>成果展示</span></h2>
            <div>
                <img src={layer} alt="ITETS 3 Layers" className="thumbnail" />
                <p className="no-indent">
                    ITETS 參考 <a href="https://www.researchgate.net/figure/274718805_fig3_Fig-3-The-three-layer-IoT-architecture" target="_blank"><em>three-layer IoT architecture</em></a> 設計。 相對應的關係為：
                </p>
                <ul>
                    <li><strong>Perception Layer（感知層）</strong>: RGB-D sensor</li>
                    <li><strong>Network Layer（網路層）</strong>: Capturer</li>
                    <li><strong>Application Layer（應用層）</strong>: Professional Technical Interface</li>
                </ul>
                <p>
                    RGB-D sensor 做為感知層，抓取使用者的動作之後，將影像資訊傳遞到 Capturer。Capturer 將實作網路層的部分，透過 Wi-Fi 網路將影像流傳至伺服器。接著影像流會在伺服器被處理成系統的特定資料格式，然後被應用於 ProTI 上，此處為應用層的實作。
                </p>
            </div>
            <div className="clearfix">
                <img src={demo} alt="demo" className="thumbnail" />
                <p>
                    系統提供的 Professional Technical Interface（簡稱 ProTI）提供下列兩種模式：
                </p>
                <ol>
                    <li><strong>標示關鍵姿勢：</strong>
                        <p>以專業人士的動作建立的訓練模組，建立者需自行標註連續動作中需要特別被注意（比對）的姿勢，我們稱之為「關鍵姿勢」。ProTI 提供影片式的瀏覽以及標註工具，讓專業人士能快速的標記關鍵姿勢，作為和使用者比對的範本。</p>
                    </li>
                    <li><strong>比對姿勢：</strong>
                        <p>專業人士以播放的方式比較訓練模組的關鍵姿勢和訓練者姿勢的差異，最主要的比較標準為骨架的差異性。訓練者的骨架和訓練模組有差異時（角度或是位置），骨架將會顯示呈紅色，代表動作必須修正。同時專業人士也可以針對錯誤留下建議，並將比對結果輸出給使用者，達到遠端修正與回饋的效果。
                        </p>
                    </li>
                </ol>
                <p>
                    ProTI 目前提供同時從兩個視角檢視一個訓練動作，未來系統可因應需求擴充成多個視角。上述提到的<strong>骨架</strong>為比對姿勢正確與否的比較值。在比對模式時，呈現於 ProTI 上方的兩個畫面為訓練者的運動紀錄，於下方的則為訓練模組。訓練模組只會顯示關鍵姿勢，而訓練者的紀錄則會以影片的形式撥放。專業人士可以調整訓練者影像至特定的位置並與關鍵姿勢比較，觀察差異。在專業人士操作完比對流程後，針對每個關鍵姿勢所記錄下來的回饋則會輸出至訓練者的上傳空間，訓練者可藉由回饋中與模組自己與訓練模組的動作差異以及文字建議修正自己的姿勢，達到自我修正的目的。
                </p>
            </div>

        </article>
    );
}

export default Dissert;