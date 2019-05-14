import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      charactersRemaining: 140
    };
  }

  updateCharacters = e => {
    this.setState({
      charactersRemaining: 140 - e.target.value.length,
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.updateCharacters} type="text" name="message" id="message" value={this.state.value} />
        <div>{this.state.charactersRemaining}</div>
      </div>
    );
  }
}

export default TwitterMessage;
