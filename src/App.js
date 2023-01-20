import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
	const [query, setQuery] = useState("");
	const [images, setImages] = useState([]);
	const inputRef = useRef();

	const fetchWithURL = async (url) => {
		try {
			const test = await fetch(`./api/${url}`);
			const response = await test.json();
			console.log(response);
			setImages([...response]);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		query.length > 0 && fetchWithURL(query);
	}, [query]);

	const submitHandler = (e) => {
		e.preventDefault();
		setQuery(inputRef.current.value);
	};

	return (
		<div className="App">
			<form onSubmit={submitHandler}>
				<input ref={inputRef}></input>
				<button type="submit">Scrap!</button>
			</form>
			<ul>
				{images.length > 0 &&
					images.map((imageURL, index) => {
						return (
							<li key={index}>
								<img src={imageURL}></img>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default App;
