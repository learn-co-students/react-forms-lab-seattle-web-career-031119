import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charactersRemaining: props.maxChars,
      message: ""
    };
  }

  updateCharacters = (ev) => {
    this.setState({
      charactersRemaining: 140 - ev.target.value.length,
      message: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.updateCharacters} value={this.state.message} />
        {this.state.charactersRemaining}
      </div>
    );
  }
}

export default TwitterMessage;
