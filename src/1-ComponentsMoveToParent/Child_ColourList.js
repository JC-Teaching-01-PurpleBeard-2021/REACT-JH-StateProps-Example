import { Component } from 'react';

class ChildComponentList extends Component {
	render() {
		return <>{this.props.colourList}</>;
	}
}

export default ChildComponentList;
