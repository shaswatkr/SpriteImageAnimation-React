import React, { Component } from 'react';
import './App.css';

let tID;

class App extends Component {

	stopAnimate() {
		clearInterval(tID);
	}

	animateScript() {
		var position = 0;
		const interval = 100;
		const diff = 1000;
		tID = setInterval(() => {
			document.getElementById("image").style.backgroundPosition =
				`-${position}px 0px`;
			if (position < 10000) { position = position + diff; }
			else { position = 0; }
		}
			, interval);
	}

	render() {
		return (
			<div>
				<h1 class="high"> Hover over the image to make it move </h1> <hr />
				<p id="image" onMouseOver={this.animateScript} onMouseOut={this.stopAnimate} />
			</div>
		);
	}
}

export default App;