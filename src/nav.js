import React from 'react';
import './css/slick.css';
import './css/style.css';
import sitelogo from './images/site-logo.png';

function Navigation(){
return(
    <nav classname="site-navigation">
		<div classname="site-navigation-inner site-container">
			<img src={sitelogo} alt="site logo"/>
			<div classname="main-navigation">
				<ul classname="main-navigation__ul">
					<li><link to="/" title="Home"/></li>
				</ul>
			</div>
			<div id="myBtn" classname="burger-container" onclick="myFunction(this)">
				<div classname="bar1"></div>
				<div classname="bar2"></div>
				<div classname="bar3"></div>
			</div>
		</div>
	</nav>
);
}
export default Navigation;