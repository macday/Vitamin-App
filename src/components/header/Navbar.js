import React, { Component } from 'react';
import ReactDom from 'react-dom'; 
import '../styles/Navbar.css';

export class Navbar extends Component {
    changePosStatic = y =>{
        for(var i = 0; i < y.length; i ++){
            y[i].style.position = "static";	
            }
    }

    changePosAbsolute =  y => {
        for(var i = 0; i < y.length; i ++){
                y[i].style.position = "absolute";	
            }
        }
    expand(){
        var x = document.getElementById("navbar-slide");
        var y = document.getElementsByClassName("item");
      if(x.getAttribute("value") === "closed"){
          x.style.width = "400px";
          x.setAttribute("value","opened")
          
      setTimeout(this.changePosStatic(y), 40);
      }
      else if(x.getAttribute("value") === "opened"){
          x.style.width = "60px";
          x.setAttribute("value","closed"); 
      setTimeout(this.changePosAbsolute(y), 4);
      }
    }
    
    render() {
        return (
            <div className = "Nav-bar-pos">
                <div id = "top-menu-icon" onClick = {() => this.expand()}>
                    <div className = "item-main-icon"><i class="fas fa-bars"></i></div>
                </div>

                <div id = "navbar-slide" value = "closed">
                    
                    <div className = "item"><i class="fas fa-home"></i></div>
                    <div className = "item"></div>
                    <div className = "item">Jo</div>
                    <div className = "item">Jo</div>
                    <div className = "item">Jo</div>
                </div>
            </div>
        )
    }
}

export default Navbar
