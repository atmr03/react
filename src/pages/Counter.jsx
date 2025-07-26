import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("construktor");
  }

  componentDidMount() {
    this.setState({ count: 0 });
    console.log("componentdidmount");
  }

  componentDidUpdate() {
    console.log("componentdidupdate");
    if (this.state.count === 10) {
      this.setState({ count: 0 });
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        {console.log("render")}
      </div>
    );
  }
}

export default Counter;
