//Import React & ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Function to generate Text
const clickOnMe = () => {
	return 'Click on me!';
}

//Create a react component
const App = () => {
	const placeholderText = 'Type here!';
	const labelText = 'Enter name:';

	return (
		<div>
			<label className="label" htmlFor="name">{labelText}</label>
			<input id="name" type="text" placeholder={placeholderText} />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>
				{clickOnMe()}
			</button>
		</div>
	);
};

//Take react component and show it on screen
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);