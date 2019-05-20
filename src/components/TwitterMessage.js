import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      chars: ''
    };
  }

  handleChange = event => {
    this.setState({
      chars: event.target.value
    }, console.log(event.target.value))

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={this.handleChange}
          type="text"
          name="message"
          id="message"
          value={this.state.chars}
          />
        <p>Characters remaining: {this.props.maxChars - this.state.chars.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
