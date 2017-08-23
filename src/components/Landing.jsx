import React from 'react';

export default class Landing extends React.Component {
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
    return (
      <div>
        <h1>Always the 3rd Sunday in May {this.props.date}</h1>
        <h2>It is {this.state.date.toDateString()}</h2>
      </div>
    );
  }

}