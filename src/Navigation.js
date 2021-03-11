import React from 'react';
import './Navigation.css';
import siteLogo from './Image/site-logo.png'

function Navigation(){
return(
<div className="site-navigation">
		<div className="site-navigation-inner site-container">
			<img src={siteLogo} alt="site logo"/>
			<div className="main-navigation">
				<ul className="main-navigation__ul">
					<li><a href="/">Homepage</a></li>
					<li><a href="/">Page 1</a></li>
					<li><a href="/">Page 2</a></li>
					<li><a href="/">Page 3</a></li>
					<li><a href="/">Page 4</a></li>
				</ul>
			</div>
			<div id="myBtn" className="burger-container" >
				<div className="bar1"></div>
				<div className="bar2"></div>
				<div className="bar3"></div>
			</div>
			{/* <script>
				function myFunction(x) {
					x.classList.toggle("change");
				}
			</script> */}

		</div>
	</div>
);
}

export default Navigation;