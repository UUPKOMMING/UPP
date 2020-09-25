import React, { Component } from 'react'

export default class Button extends Component {
    componentDidMount() {
      const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.fixed-action-btn');
            var instances = M.FloatingActionButton.init(elems, {});
            console.log(instances)
          });
    }
    
    render() {
        return (
            
            <div class="fixed-action-btn">
              <a href='#UPPnav' class="btn-floating btn-large green">
                <i class="large material-icons">mode_edit</i>
              </a>
              <ul>
                <li><a href="#UPPnav" class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
                <li><a href="#UPPnav" class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
                <li><a href="#UPPnav" class="btn-floating green"><i class="material-icons">publish</i></a></li>
                <li><a href="#UPPnav" class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
              </ul>
            </div>
        )
    }
}
