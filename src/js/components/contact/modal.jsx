import React, { Component } from 'react';

class Modal extends Component {

    componentDidMount() {
        let url = 'https://api.instagram.com/v1/users/self/?access_token=1719925228.3965f0a.604e8f09e22c47e7ab4add7c02b0a477';
        return fetch(url)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        return (
            <div id="modal" className="animated fadeIn">
                <div>
                    <img src={this.props.src} alt="modal" />
                </div>
            </div>
        );
    }
}

export default Modal;