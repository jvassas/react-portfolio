import React, { Component } from 'react'
import Dlogo from "../../assets/images/darklogo.png";


export default class Jumbo extends Component {
    render() {
        return (
            <div>
                 <img src={Dlogo} class="img-fluid fullscreen" id="logo" />
                
            </div>
        );
    }
}
