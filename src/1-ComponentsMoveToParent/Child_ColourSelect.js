import { Component } from 'react';

class ChildComponentSelect extends Component {
	render() {
		return (
			<div class='ChildSelect'>
				<form onSubmit={this.props.handleSubmit}>
					<label for='colours'>Choose a colour:</label>

					<select value={this.props.selectedColour} onChange={this.props.handleColour}>
						<option value='red'>Red</option>
						<option value='orange'>Orange</option>
						<option value='yellow'>Yellow</option>
						<option value='green'>Green</option>
						<option value='blue'>Blue</option>
					</select>
					<button type='submit'>Add Colour</button>
				</form>
			</div>
		);
	}
}

export default ChildComponentSelect;
