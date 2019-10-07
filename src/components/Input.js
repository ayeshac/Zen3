import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: ""
    };
  }

  handleChange = e => {
    const newText = e.target.value;
    this.props.fn(newText);
    this.setState({ currentText: newText });
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.currentText}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
