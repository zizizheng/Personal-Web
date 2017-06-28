import React from 'react';
import sound from '../../../assets/images/band_photo/sound.jpg';
import coffee from '../../../assets/images/band_photo/coffee.jpg';
import logo from '../../../assets/images/band_photo/logo.png'

export default class SlideShow extends React.Component {
    constructor() {
        super();
        this.photos = [sound, coffee, logo];
        this.state = { src: this.photos[0] };
        this.index = 0;
        this.photoClick = this.photoClick.bind(this);
    }
    render() {
        return (
            <div id="slideShow">
                <h3><i>Performance Photos</i></h3>
                <img src={this.state.src} alt="band photos" />
                <div className="arrow leftArrow" onClick={() => this.photoClick(-1)}>&#10094;</div>
                <div className="arrow rightArrow" onClick={() => this.photoClick(1)}>&#10095;</div>
            </div>
        );
    }

    photoClick(v) {
        this.index += v;
        if (this.index < 0) this.index = this.photos.length - 1;
        else if (this.index >= this.photos.length) this.index = 0;
        this.setState({ src: this.photos[this.index] });
    }
}