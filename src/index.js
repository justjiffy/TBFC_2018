import React from 'react';
import ReactDOM from 'react-dom';

const nextEvent = new Date('5/27/2018');

class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(), 
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
	console.log(this.props.date);
		return ( 
			<div>
				<h1>Always the 3rd Sunday in May, {this.props.date}</h1>
				<h2>It is {this.state.date.toDateString()}</h2>
			</div>
		);
	}

}

ReactDOM.render(
  <Countdown date={nextEvent.toDateString()} />,
  document.getElementById('root')
);
