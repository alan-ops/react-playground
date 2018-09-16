import React, { Component } from 'react';
import People from '../components/People';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personList: [],
      name: ''
    };

    // contexto do 'this' refere ao componente App
    this.clickHandler = this.clickHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.keyHandler = this.keyHandler.bind(this);
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

  keyHandler(e) {
    if (e.key === 'Enter') {
      this.clickHandler();
    }
  }

  render() {
    return (
      <div>
        <h2>Pessoas:</h2>
        <People list={this.state.personList} />
        <input
          type="text"
          onChange={this.changeHandler}
          onKeyUp={this.keyHandler}
          value={this.state.name}
        />
        <button onClick={this.clickHandler}>Adicionar</button>
      </div>
    );
  }
}
export default Home;
