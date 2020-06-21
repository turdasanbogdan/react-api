import React, {Component} from 'react';
import './App.css';
import Users from './components/users';

class App extends Component {

  state = {
    users: [] ,
    searchName : 'Type Name'
  }

  componentDidMount() {
  
    const url = 'http://jsonplaceholder.typicode.com/users';
    var req = new Request(url);
    fetch(req)
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data })
    })
    .catch(console.log);
  
  }

  updateSearchName(event){
    this.setState({searchName: event.target.value.substr(0,20)});
  }

  render() { 

  return (
    
    <div>
      <div className="text-center pt-5 pb-5">
        <input type = "text"
          value = {this.state.searchName}
          onChange = {this.updateSearchName.bind(this)}
        />
      </div>
     <Users users= {this.state.users.filter(
       (user) => {
         return (user.name.indexOf(this.state.searchName) !== -1);
       }
     )}/>
    </div>
  );
  }
}

export default App;


