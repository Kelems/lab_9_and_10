import React from "react";

class Button extends React.Component {
  render() {
    const { label, click } = this.props;
    return (
      <div className="button">
        <button onClick={click}>{label}</button>
      </div>
    );
  }
}

export default Button;
