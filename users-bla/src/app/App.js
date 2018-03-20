import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import UsersList from './users/UsersList';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      users:[],
      isGrid: false,
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
 onClickChangeView = event => {
   event.preventDefault();

   if(this.state.isGrid){
     this.setState({isGrid:false})
   }else {
     this.setState({isGrid:true});
   }
 }


  render() {
    return (
      <div className= 'container'>
      <Header viewChange={this.onClickChangeView}/>>
      <UsersList data={this.state.users} isGrid={this.state.isGrid} /> 
      <Footer />
      </div>
    )
  
  }
}


export default App;
