import { Component } from 'react';
import ChildComponentList from './Child_ColourList';
import ChildComponentSelect from './Child_ColourSelect';

let randomColourID = 1;
let randomColour = 'blue';
let arrColours = [];

class ParentComponent extends Component {
	state = {
		selectedColour: 'blue',
		colourList: '',
	};

	handleColour = (e) => {
		// console.log(e.target.value);
		this.setState({ selectedColour: e.target.value });
		this.randColour();
	};

	randColour = () => {
		randomColourID = Math.floor(Math.random() * 10);

		// console.log(randomColourID);

		if (randomColourID === 0 || randomColourID === 1) {
			return (randomColour = 'tomato');
		} else if (randomColourID === 2 || randomColourID === 4) {
			return (randomColour = 'orange');
		} else if (randomColourID === 5 || randomColourID === 6) {
			return (randomColour = 'yellow');
		} else if (randomColourID === 7) {
			return (randomColour = 'green');
		} else if (randomColourID === 8) {
			return (randomColour = 'red');
		} else {
			return (randomColour = 'blue');
		}
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let tempNewColour = { _id: arrColours.length, rand: randomColour, col: this.state.selectedColour };
		// console.log(tempNewColour);
		arrColours.unshift(tempNewColour);
		// console.log(arrColours);

		this.setState({
			colourList: (
				<div className='ChildList'>
					<ul>
						{arrColours.map((colourItem) => (
							<li style={{ backgroundColor: colourItem.rand }}>{colourItem.col}</li>
						))}
					</ul>
				</div>
			),
		});
	};

	render() {
		return (
			<div className='Parent'>
				<h1>
					<a href='https://youtu.be/KnBi-LNM0Og'>Twisting My Melon Man</a>
				</h1>
				<ChildComponentSelect selectedColour={this.state.selectedColour} handleColour={this.handleColour} handleSubmit={this.handleSubmit} />
				<ChildComponentList colourList={this.state.colourList} />
			</div>
		);
	}
}

export default ParentComponent;
