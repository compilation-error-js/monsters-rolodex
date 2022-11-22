import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';



class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(users=> this.setState({monsters:users}))
  }

  onSearchChange = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState({searchField})
  };

  render(){
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    return (

      
      <div className="App">
      <h1 className='app-heading'>Monster Rolodex</h1>
        <SearchBox className = 'monster-search-box' onChangeHandler = {onSearchChange} placeholder = "search monsters" />
        <CardList monsters = { filteredMonsters }/>
      </div>
    );
  }
}


export default App;
