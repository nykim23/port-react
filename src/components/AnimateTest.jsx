import React from "react";
import { Animate } from "react-simple-animate";
import { divStyle, buttonStyle } from "../styles";

class AnimateTest extends React.PureComponent {
  state = {
    play: false
  };


  render() {
    return (
      <>
        <Animate play={this.state.play} start={{ transform: "translateX(0px)" }}
          end={{ transform: "translateX(200px)" }}
        >
          <div style={divStyle} />
        </Animate>
        <button style={buttonStyle} onClick={() => this.setState(({ play }) => ({ play: !play }))}>
          play
        </button>
      </>
    )
  }
}

export default AnimateTest;