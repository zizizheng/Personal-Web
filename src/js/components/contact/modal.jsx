import React, { Component } from 'react';

class Modal extends Component {

    render() {
        return (
            <div id="modal" className="animated fadeIn">
                <div>
                    <img className="icon" src={this.props.data.src} alt="modal" />
                </div>
                <img className="profile" src={this.props.data.profile_picture} alt="instagram" />
                <h1>{this.props.data.full_name}</h1>
                <h2>{this.props.data.bio}</h2>
                <h3> Followed By {this.props.data.followed_by} | Follows {this.props.data.follows}</h3>
                <div className="media-block">
                    {this.props.data.medias}
                </div>
            </div>
        );
    }

}

export default Modal;