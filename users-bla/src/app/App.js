import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import UsersList from './users/UsersList';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      users:[]
    }
  }
  componentDidMount(){
    fetch('https://randomuser.me/api/?results=15')
    .then((response)=>{
      return response.json()

    })
    .then((data)=>{
      this.setState({
        users:data.results
      })
    })
  }

  render() {
    return (
      <div className= 'container'>
      <Header/>
      <UsersList data={this.state.users} /> 
      <Footer />
      </div>
    )
  
  }
}


export default App;
