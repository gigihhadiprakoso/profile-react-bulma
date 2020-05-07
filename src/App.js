import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import 'bulma/css/bulma.css';
import 'bulma/css/bulma.min.css';
import Header from './components/_header';
import Body from './components/_body';

function App() {
	useEffect( ()=> {
        const script = document.createElement("script");
        script.src = "https://use.fontawesome.com/releases/v5.3.1/js/all.js";
        script.async = false;
        document.body.appendChild(script);

        return () => {document.body.removeChild(script);}
	});

	document.title="Gigih's Home";
	
	return (
		// <div className="App">
		// 	<header className="App-header">
		// 		<img src={logo} className="App-logo" alt="logo" />
		// 		<p>Edit <code>src/App.js</code> and save to reload.</p>
		// 		<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
		// 	</header>
		// </div>
		
		<div>
			<Header />
			<Body />
		</div>
	);
}

export default App;
