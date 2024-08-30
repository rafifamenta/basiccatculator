import Display from "./Display"
import ButtonPanel from "./ButtonPanel"
import { Component } from "react";
import operations from "../Logic/operations";
import "./app.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';


class App extends Component {
  state = {
    total: null,
    next: null,
    operator: null
  }

  handleClick = buttonName => this.setState(operations(this.state, buttonName))

  handleReset = () => {
    this.setState({
        total: null,
        next: null,
        operator: null,
    });
};

handleClick = buttonName => {
  if (buttonName === "AC") {
      return this.handleReset();
  }
  this.setState(operations(this.state, buttonName));
};

  render() {
    return (
      <div className="component-app">
        <FontAwesomeIcon icon={faCat} size="2x" style={{ color: '#ff69b4', marginBottom: '10px' }} />
        
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div >
    );
  }
}

export default App;
