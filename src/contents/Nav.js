import React, { Component } from 'react'
const M = window.M;
export default class Nav extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
            console.log(instances)

          });
    }
    render() {
        return (
            <>
             <nav className="nav-wrapper   transparent">
                    <div className="container ">
                    <a href="/" className="brnd-logo">LOGO</a>
                    <a href="/" className="sidenav-trigger" data-target="mobile-nav">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#photos">Potos</a></li>
                        <li><a href="#services">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <ul className="sidenav green" id="mobile-nav">
                        <li><a className="white-text" href="#photos">Potos</a></li>
                        <li><a className="white-text" href="#services">About</a></li>
                        <li><a className="white-text" href="#contact">Contact</a></li>
                    </ul>
                    </div>
                </nav>
            </>
        )
    }
}
