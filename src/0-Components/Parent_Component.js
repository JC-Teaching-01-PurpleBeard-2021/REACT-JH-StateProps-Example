import { Component } from 'react';
import ChildComponentList from './Child_ColourList';
import ChildComponentSelect from './Child_ColourSelect';

class ParentComponent extends Component {
	render() {
		return (
			<div class='Parent'>
				<h1>
					<a href='https://youtu.be/KnBi-LNM0Og'>Twisting My Melon Man</a>
				</h1>
				<ChildComponentSelect />
				{/* <ChildComponentList /> */}
			</div>
		);
	}
}

export default ParentComponent;
