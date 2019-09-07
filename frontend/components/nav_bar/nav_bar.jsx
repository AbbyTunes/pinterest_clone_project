import React from "react";
import { Link } from "react-router-dom";

// if logged_in, shows the navBar
// how to style each of them

const NavBar = ({currentUser, logout}) => {
	// const icon = () => {
	// 	return (
	// 		<img src="question.png" alt="icon"/>
	// 	)
	// }
	return (
		<div>
			<nav className="nav-bar">

				<div className="nav-left">
					<div className="logo-nav"> 
						<Link to="/"></Link>
					</div>
				</div>

				<div className="nav-middle">
					<div className="search-icon"></div>
					<input className="search" type="text" placeholder="Hello Darkness, my old friend."/>
				</div>

				<div className="nav-right">
					<div className="nav-link">
						<Link to="/">Home</Link>
						<Link to="/">Following</Link>
						<Link to="/">{ currentUser.username }</Link>
						<Link to="/">Notifications</Link>
					</div>
					
					<div className="hamburger">
						
					</div>
				</div>

				
			</nav>

			<button className="logout-button" onClick={logout}>logout</button>
		</div>
		
	);
}

export default NavBar;