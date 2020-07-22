import React from 'react';

class Clock extends React.Component {

	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount() {
		this.timerId = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval( this.timerId );
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return(
			<div>
				<h1>Componente Clock</h1>
				<p>La hora actual es {this.state.date.toLocaleTimeString()}</p>
			</div>
		);
	}
}

export default Clock;
