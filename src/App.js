import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

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
      <input className='search-box'
      type='search'
      placeholder='search monster'
      onChange={ onSearchChange}
       />
      {
        filteredMonsters.map((monster,key)=>{
         return <div key={key}>
         <h1>{monster.name}</h1>
         </div>
        })
      }
        
      </div>
    );
  }
}


export default App;
