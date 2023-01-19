import logo from "./logo.svg";
import "./App.css";

function App() {
	const testFoo = async () => {
		try {
			const test = await fetch("./api/www.wp.pl");
			const response = await test.json();
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	testFoo();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
			</header>
		</div>
	);
}

export default App;
