import React, { Component } from 'react';
import './header.css';




class Header extends Component {
    render() {
        return <div className="header">
          
	<div class="content">
		<h2>Todo</h2>
		<h2>List</h2>
	</div>  
    
        <div class="navbar">
  <input type="checkbox" id="navbar-checkbox"/>
  <div class="navbar-header">
   

  </div>
  <div class="navbar-responsive-button">
    <label for="navbar-checkbox">
      <span class="hamburger-icon"></span>
      <span class="hamburger-icon"> </span>
      <span class="hamburger-icon"></span>
    </label>
  </div>
  <div class="navbar-links">
    <a href="#About">Home</a>
    <a href="#Shop">Done</a>
    <a href="#Locations">Undone</a>
    <a href="#Contact">List</a>
  </div> 
</div>



</div>;
    }
}

export default Header;