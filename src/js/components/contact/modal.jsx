import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
class Modal extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            bio: '',
            full_name: '',
            username: '',
            profile_picture: '',
            medias: []
        };
        this.fetched = false;

    }
    componentDidMount() {
        setTimeout(this.fetchData.bind(this), 50);
    }

    render() {
        return (
            <div id="modal" className="animated fadeIn">
                <div>
                    <img className="icon" src={this.props.src} alt="modal" />
                </div>
                <img className="profile" src={this.state.profile_picture} alt="instagram" />
                <h1>{this.state.full_name}</h1>
                <h2>{this.state.bio}</h2>
                <h3> Followed By {this.state.followed_by} | Follows {this.state.follows}</h3>
                <div className="media-block">
                    {this.state.medias}
                </div>
            </div>
        );
    }
    fetchData() {
        if (!this.fetched) {
            // local
            // let profile = 'https://api.instagram.com/v1/users/self/?access_token=1719925228.1064b18.f3df8a8016974fe79252b87cab73a729';
            // let media = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=1719925228.1064b18.f3df8a8016974fe79252b87cab73a729&count=4';

            let profile = 'https://api.instagram.com/v1/users/self/?access_token=1719925228.bca275e.68132251ec524787817be421003451ef';
            let media = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=1719925228.bca275e.68132251ec524787817be421003451ef&count=4';

            fetchJsonp(profile)
                .then((response) => response.json())
                .then((data) => {
                    this.fetched = true;
                    clearTimeout();
                    this.setState({
                        bio: data.data.bio,
                        full_name: data.data.full_name,
                        profile_picture: data.data.profile_picture,
                        followed_by: data.data.counts.followed_by,
                        follows: data.data.counts.follows
                    });
                })
                .catch((error) => console.error(error));
            fetchJsonp(media)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    let medias = [];
                    let source;
                    let internel_text;
                    for (let i = 0; i < data.data.length; i++) {
                        internel_text = data.data[i].caption.text.split(/(?:\r\n|\r|\n)/g);
                        source = data.data[i].type === 'video' ?
                            <div key={i}>
                                <video controls>
                                    <source src={data.data[i].videos.low_bandwidth.url} type="video/mp4" />
                                </video>
                                <p>{internel_text}</p>
                            </div>
                            :
                            <div key={i}>
                                <img src={data.data[i].images.low_resolution.url} alt="post from ig" />
                                <p>{internel_text}</p>
                            </div>;
                        medias.push(source);
                    }
                    this.setState({ medias: medias });

                })
                .catch((error) => console.log(error));

        }
    }
}

export default Modal;

// https://www.instagram.com/oauth/authorize/?client_id=1064b18625b24a3e9f39f5d80ee8faa3&redirect_uri=http://localhost:3000/&response_type=token&scope=likes+public_content