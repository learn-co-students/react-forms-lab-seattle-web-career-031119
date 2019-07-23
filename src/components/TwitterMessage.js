import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
    this.updateMessage = this.updateMessage.bind(this)
  }

  updateMessage(ev) {
    this.setState({
      value: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.updateMessage}/>
        <p>{this.props.maxChars-this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
