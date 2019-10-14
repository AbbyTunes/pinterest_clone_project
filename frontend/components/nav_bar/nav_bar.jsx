import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";

const NavBar = ({ currentUser, logout }) => {

	if (!currentUser) {
		return (<div></div>)
	}
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
					<input className="search" type="text" placeholder="Search"/>
				</div>

				<div className="nav-right">
					<div className="nav-link">
						<Link to="/">Home</Link>
						<Link to="/">Following</Link>
						<Link to="/my-boards">{ currentUser.username }</Link>
						<Link to="/">Notifications</Link>
					</div>
					<Dropdown logout={logout} currentUser={currentUser} />
				</div>	
			</nav>
			<div></div>
		</div>
	);
}

export default NavBar;
