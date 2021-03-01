import { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
	const [fact, setFact] = useState('');
	const [image, setImage] = useState('https://assets.chucknorris.host/img/avatar/chuck-norris.png');
	const [categories, setCategories] = useState([]);
	const renderSingleCategory = useRef('Select A Category');

	useEffect(() => {
		getFromApi('https://api.chucknorris.io/jokes/random');
		getCategories();
	}, []);

	const getFromApi = async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data.value);
		setFact(data.value);
	};

	const getCategories = async () => {
		const response = await fetch('https://api.chucknorris.io/jokes/categories');
		const data = await response.json();
		setCategories(data);
	};

	const handleChange = (option) => {
		renderSingleCategory.current = option.label;
		getFromApi(`https://api.chucknorris.io/jokes/random?category=${renderSingleCategory.current}`);
	};

	return (
		<div className="App">
			<Header image={image} />
			<div className="out-fact-div">
				<div className="fact-div">
					<h2 className="fact">{fact}</h2>
				</div>
			</div>

			<Dropdown
				options={categories}
				value={renderSingleCategory.current}
				placeholder="Select a category"
				onChange={handleChange}
				className="dropdown"
			/>

			<Button
				onClick={() => getFromApi('https://api.chucknorris.io/jokes/random')}
				variant="warning"
				className="fact-button"
			>
				Random Fact
			</Button>
		</div>
	);
}

export default App;
