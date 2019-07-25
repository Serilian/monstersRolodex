import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";

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

  handleChangeSearchBox = (e)=> {
    this.setState({searchField: e.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <>
        <div className="App">
          <h1 style={{fontFamily: "Bigelow Rules, sans-serif", fontSize:"8rem", color:"white"}}>Monster Rolodex</h1>
          <SearchBox handleChange={this.handleChangeSearchBox} placeholder={"Search monsters"}/>
          <CardList monsters={filteredMonsters} />
        </div>
      </>
    );
  }
}

export default App;
