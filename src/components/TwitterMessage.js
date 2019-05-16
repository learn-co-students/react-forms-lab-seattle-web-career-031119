import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      total: props.maxChars,
      remaining: props.maxChars
    };
  }

  handleChange = (ev) => {
    const newRemaining = this.state.total - ev.target.value.length
    this.setState({
      value: ev.target.value,
      remaining: newRemaining
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div>{this.state.remaining}</div>
      </div>
    );
  }
}

export default TwitterMessage;
