import React, { Component } from 'react';
// import './components';

class App extends Component {

  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1>My Todo List</h1>
        </header>
        <div className="list-content">
          <label>
            <input type="text" className="item-input"></input>
          </label>
          <ul className="todo-list">

          </ul>
          <button className="add-item">Add Item</button>
        </div>
      </div>
    );
  }
}

export default App;
