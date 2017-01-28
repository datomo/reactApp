import React from 'react';

export default class Content extends React.Component {
	render() {
		return (
			<div>
				<button onClick = {this.props.updateStateProp}>Click</button>
				<h3>{this.props.myDataProp}</h3>
			</div>
		);
	}	 
}