import React from 'react';

import foodubImg from '../../../assets/images/portfolio/foodhub.png';
import welcomeImg from '../../../assets/images/portfolio/welcome.png';
import expiryImg from '../../../assets/images/portfolio/expiry.png';
import donate_record from '../../../assets/images/portfolio/donate_record.png';
import add from '../../../assets/images/portfolio/add.png';
import export_record from '../../../assets/images/portfolio/export_record.png';
import exported from '../../../assets/images/portfolio/export.png';

export default class Foodhub extends React.Component {

    render() {
        return (
            <article className={this.props.class}>
                <h1 className="title">Foodhub</h1>
                <h2 className="subtitle">The goal of Foodhub is to manage donations from charity people and deliver to those who needs help.  </h2>
                <p>食物銀行必須管理捐贈進來的物資並發送給需要的單位，目前志工皆以紙本為管理的工具，使用上稍嫌不便。此<strong>進存銷系統</strong>將捐贈品的紙本記錄、收據等電子化，並提供介面讓志工操作與管理貨品。
                </p>
                <p>此系統使用 <strong>Angular 2(4)</strong> 做為前端開發框架，
                    後端伺服器使用<strong> Node.js</strong> 和 <strong>express.js</strong>，
                    並提供以下幾項功能:
                </p>

                <ul>
                    <li>依權限劃分能使用的系統功能</li>
                    <li>捐贈品管理（捐贈 & 贈與）</li>
                    <li>捐贈者與受贈者管理（捐入與收到的單位）</li>
                    <li>產生電子收據</li>
                    <li>系統使用者管理</li>
                </ul>

                {this.Login()}

                {this.WelcomePage()}

                {this.Management()}

                {this.Report()}
            </article >
        );
    }

    Login() {
        return (
            <section>
                <h2 className="section-title"><span>首頁</span></h2>
                <p>為了避免捐贈者與受贈者的個人資料外洩，並且被隨意修改，以及考慮到系統使用者的帳號管理，我們將系統使用者權限劃分為<strong>管理員</strong>以及<strong>一般使用者</strong>。管理員能夠使用系統所有的功能，而一般使用者只能操作管理捐贈品的部分。

                </p>
                <div className="graphBlock">
                    <h3>系統的登入畫面</h3>
                    <img src={foodubImg} alt="foodhub system" />
                </div>
            </section>
        );
    }

    WelcomePage() {
        return (
            <div>
                <p>
                    在使用者登入後，系統會提供三周內到期貨品的清單，提醒這些貨品需盡快被捐出。點選標題左方的樹葉圖示，可自行輸入想查看的天數（範圍一至三十天）
                </p>
                <div className="graphBlock">
                    <h3>到期清單頁面</h3>
                    <img src={welcomeImg} alt="welcome page" />
                    <h3>調整過期天數</h3>
                    <img src={expiryImg} alt="welcome page" />
                </div>
            </div>
        );
    }

    Management() {
        return (
            <section>
                <h2 className="section-title"><span>管理物資</span></h2>
                <p>
                    物資、捐贈者、受贈者以及使用者管理的介面大致上是相同的。所有頁面皆有搜尋與新增的功能，物資管理依捐贈與贈與劃分成「紀錄搜尋」、「捐贈」以及「贈與」。以下將以物資管理說明系統功能。
                </p>
                <p>
                    使用者可依照物資的名稱、類別、所在的倉庫地區和條碼來搜尋物資的紀錄，可針對搜尋到的結果做修改或刪除。由於物資捐贈（贈與）都是以一張清單為單位，單一捐贈者捐贈多項物資（或是單一受贈者領取多項物資），配對一組全贈字號（全物字號），故此處修改都是針對紀錄而不是庫存量。
                </p>
                <p>
                    物資管理新增的部分為加入一筆新捐贈進來的資料，每筆捐贈清單皆有一組特殊編號稱為<strong>全贈字號</strong>。
                    物資捐贈提供<strong>條碼自動填入</strong>的功能：若是有新增過該項物資，刷入條碼後會自動將物資資訊填入表格內。在一張捐贈清單中可能包含好幾項物資，故系統介面提供彈性的增減物資欄位，可供使用者依照需求調整欄位。使用者填妥表格後送出便會在捐贈紀錄部分新增一組資料。
                </p>
                <div className="graphBlock">
                    <h3>物資管理－捐贈紀錄</h3>
                    <img src={donate_record} alt="search panel" />
                    <h3>物資管理－新增</h3>
                    <img src={add} alt="Add panel" />
                </div>
                <p>
                    贈與物資時，必須先由名稱、過期日或是品項類別搜尋庫存內的物資，並將想要贈與的物資加入物資簽領單中。當確定加入所有想要贈與的物資後，填上受贈者、各項物資的贈與數量後，再送出物資簽領單。同樣的，送出後會在贈與紀錄的頁面中新增該筆贈與紀錄，同時也會扣除贈與物資的庫存量。
                </p>
                <div className="graphBlock">
                    <h3>物資管理－贈與紀錄</h3>
                    <img src={export_record} alt="" />
                    <h3>物資管理－贈與</h3>
                    <img src={exported} alt="" />
                </div>
            </section>
        );
    }

    Report() {
        return (
            <div>
                <h2 className="section-title"><span>收據</span></h2>
                <p>
                    確定送出捐贈或是贈與清單後，系統會將清單內的屬性於伺服器轉換成 PDF 並提供下載點。使用者可以選擇列印出清單收據抑或是下載以電子的方式傳送給捐贈者或是受贈者。
                </p>
            </div>
        );
    }

}
