import React, { Component } from 'react';
import People from './People';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personList: [],
      name: ''
    };

    // contexto do 'this' refere ao componente App
    this.clickHandler = this.clickHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    // https://reactjs.org/docs/state-and-lifecycle.html
    this.setState({ name: e.target.value });
  }

  clickHandler() {
    if (!this.state.name) return;

    this.setState({
      personList: [...this.state.personList, this.state.name],
      name: ''
    });
  }

  render() {
    return (
      <div>
        <h2>Pessoas:</h2>
        <People list={this.state.personList} />
        <input
          type="text"
          onChange={this.changeHandler}
          value={this.state.name}
        />
        <button onClick={this.clickHandler}>Adicionar</button>
      </div>
    );
  }
}

export default App;
