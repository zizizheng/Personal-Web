import React from 'react';

export default class Profolio extends React.Component {
    render(){
        return (
            <main id="main">

                <div className="container">

                    <div className="row topspace">
                        
                        <aside className="col-lg-3">

                            <ul className="text-right nav-side">
                                <li className="active"><a href="#ui">FoodHub</a></li>
                                <li><a href="#frontend">Master Dissertion</a></li>
                                <li><a href="#backend">Someting</a></li>
                                <li><a href="#projects">oh shit</a></li>
                            </ul>

                        </aside>

                        <article className="col-lg-9 maincontent">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Eveniet, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam beatae soluta accusantium iusto nihil nesciunt unde veniam magnam repudiandae sapiente.</p>
                            <p><img src="assets/images/mac.jpg" alt="" className="" width="100%" /></p>
                            <h3>Necessitatibus</h3>
                            <p>Velit, odit, eius, libero unde impedit quaerat dolorem assumenda alias consequuntur optio quae maiores ratione tempore sit aliquid architecto eligendi pariatur ab soluta doloremque dicta aspernatur labore quibusdam dolore corrupti quod inventore. Maiores, repellat, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam!</p>
                            <h3>Fugit, laboriosam</h3>
                            <p>Eum, quasi, est, vitae, ipsam nobis consectetur ea aspernatur ad eos voluptatibus fugiat nisi perferendis impedit. Quam, nulla, excepturi, voluptate minus illo tenetur sint ab in culpa cumque impedit quibusdam. Saepe, molestias quia voluptatem natus velit fugiat omnis rem eos sapiente quasi quaerat aspernatur quisquam deleniti accusantium laboriosam odio id?</p>
                        </article>
                        

                    </div>
                </div>
                
            </main>
        );
    }
}