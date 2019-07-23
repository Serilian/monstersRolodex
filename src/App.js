import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => this.setState({ monsters: json }))
      .catch(err => console.log(err));
  }

  render() {
    const { monsters } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.includes(this.state.searchField)
    );

    return (
      <>
        <div className="App">
          <h1>Monster Rolodex</h1>
          <CardList monsters={filteredMonsters} />
        
        </div>
      </>
    );
  }
}

export default App;
