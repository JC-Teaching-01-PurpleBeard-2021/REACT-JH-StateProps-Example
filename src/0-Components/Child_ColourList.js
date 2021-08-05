import { Component } from 'react';

class ChildComponentList extends Component {
	render() {
		return (
			<>
				<div class='ChildList'>
					<ul>
						<li style={{ backgroundColor: 'green' }}>blue</li>
						<li style={{ backgroundColor: 'blue' }}>red</li>
						<li style={{ backgroundColor: 'yellow' }}>yellow</li>
					</ul>
				</div>
			</>
		);
	}
}

export default ChildComponentList;
