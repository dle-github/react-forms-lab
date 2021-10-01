import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (e) => {
    const inputValue = e.target.value
    this.setState(
      () => {
          return {value: inputValue}
      }
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} name="message" id="message" onChange={this.handleChange}/>
        {this.props.maxChars - this.state.value.length}
      </div>
    );
  }
}

export default TwitterMessage;
