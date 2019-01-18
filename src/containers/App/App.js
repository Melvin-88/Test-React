import React from "react";
import PropTypes from "prop-types";
import "./App.scss";

class App extends React.Component {
  render() {
    return this.props.children;
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
