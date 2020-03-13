import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Nav from './components/nav'


class App extends React.Component {
  constructor (){
    super();
    this.state = {
      data:[]
    }
   
  }
componentDidMount(){
  axios.get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res);
      this.setState({
        data: res.data
      })
    })
    .catch(err => {
      console.log('Youve got and error',err)
    });
}


    
  

  render(){
    return(
      <div className ='cardContainer'>
        <Nav />
        {this.state.data.map(player => {
          return(
            <div className='player'>
              <h1>{player.name}</h1>
          <h3>{player.country}</h3>
          <h3>Has been searched {player.searches} times.</h3>
            </div>  
          )
        })}
      </div>
    )
  }
}

export default App;
