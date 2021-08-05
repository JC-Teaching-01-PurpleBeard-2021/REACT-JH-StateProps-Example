import { Component } from 'react';

let randomColourID = 1;
let randomColour = 'blue';

class ChildComponentSelect extends Component {
	state = {
		selectedColour: 'blue',
		colourList: '',
	};

	handleColour = (e) => {
		// console.log(e.target.value)
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
		this.setState({
			colourList: (
				<div class='ChildList'>
					<ul>
						<li style={{ backgroundColor: randomColour }}>{this.state.selectedColour}</li>
					</ul>
				</div>
			),
		});
		e.preventDefault();
	};

	render() {
		return (
			<>
				<div class='ChildSelect'>
					<form onSubmit={this.handleSubmit}>
						<label for='colours'>Choose a colour:</label>

						<select value={this.state.selectedColour} onChange={this.handleColour}>
							<option value='red'>Red</option>
							<option value='orange'>Orange</option>
							<option value='yellow'>Yellow</option>
							<option value='green'>Green</option>
							<option value='blue'>Blue</option>
						</select>
						<button type='submit'>Add Colour</button>
					</form>
				</div>
				{this.state.colourList}
			</>
		);
	}
}

export default ChildComponentSelect;
