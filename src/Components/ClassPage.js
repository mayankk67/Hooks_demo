import React from "react";

class ClassPage extends React.Component {
  constructor() {
    super();
    this.state = { name: "" };
    this.ChangeInput = this.ChangeInput.bind(this);
  }
  ChangeInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div>
        <h1>Enter Data</h1>
        <input
          type="text"
          onChange={this.ChangeInput}
          name="name"
          value={this.state.name}
        />
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default ClassPage;
