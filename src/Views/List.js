import React, { Component } from "react";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
        list: []
    };
  }

  addItem = (event) => {
    event.preventDefault()
    const addedItem = {id: Date.now(), name: event.target.item.value}
    this.setState((prevState) => prevState.list.push(addedItem))
    console.log(this.state.list)
  }

  displayList = (item) => {
    return <li className="list-group-item" key={item.id}>{item.name}<button onClick={this.deleteItem.bind(this, item.id)} className="btn btn-danger">Delete</button></li>
  }

  deleteItem = (id) => {
    let remainingItems = this.state.list.filter((item) => item.id !== id)
    this.setState({list: remainingItems})
  }

  render() {
    return (
      <div className="container">
        <h1>Shopping List</h1>
        <form onSubmit={this.addItem}>
          <div className="mb-3">
            <input
              type="text"
              name="item"
              placeholder="Add item to your list"
              className="form-control"
              id="item-search"
              aria-describedby="itemHelp"
            />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
        <ul className="list-group">
        {this.state.list.map(this.displayList)}
        </ul>
      </div>
    );
  }
}
