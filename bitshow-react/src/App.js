import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './partials/header';
import Footer from './partials/footer';
import Show from './entities/show';
import {showService} from './services/BitShowServices';
import ShowList from './ShowList/ShowList';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      shows: [],
      filteredShows:[],
    }
  }

  componentDidMount() {
    this.onLoad()
  }
  
  onLoad = () => {
    showService.fetchShow()
      .then((shows) => {
        this.setState({
          load: true,
          shows: shows,
          filteredShows: shows
        })
      })
    }
    onSearchValueChange = (searchValue) => {
      const filteredShows = this.state.shows.filter((show, index, array) => {
        if (show.name.toLowerCase().includes(searchValue)) {
          return show;
        }
      })
      this.setState({ filteredShows})
    }

      render() {
        return (
           <div >
          <Header onSearchValueChange={this.onSearchValueChange}/>
          <h1>Popular Shows</h1>
          <ShowList shows={this.state.filteredShows} />
          <Footer />
          </div>
        )
      
      }

}









export default App;