import React, { Component } from 'react'

export default class Parallax extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems, {});
            console.log(instances)
          });
    }
    
    render() {
        return (
            <>
              <div className="parallax-container">
                  <div className="parallax"><img src={this.props.src} alt="pic"/></div>
                  </div>  
            </>
        )
    }
}
