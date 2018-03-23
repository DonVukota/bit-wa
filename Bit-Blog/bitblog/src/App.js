import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './partials/header'
import Footer from './partials/footer'
import HomeApp from './Main/HomeApp'
import { Switch, Route } from 'react-router-dom'
import PostTitle from './Main/PostTitle'
import Autors from './Main/Autors'
import About from './Main/About'
import Autor from './Main/Autor'
import NewPost from './Main/NewPost'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path='/' component={HomeApp} />
        <Route exact path='/PostTitle' component={PostTitle} />
        <Route exact path='/Autors' component={Autors} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Autor/' component={Autor} />
        <Route exact path='/NewPost/' component={NewPost} />
        <Footer />
      </React.Fragment>




    )
  }
}

export default App;
