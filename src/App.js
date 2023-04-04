import {Component} from 'react'

import DestinationSearch from './components/DestinationSearch'

import './App.css'

const destinationsList = [
  {
    id: 1,
    name: 'Melaka Mosque',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png',
  },
  {
    id: 2,
    name: 'Shrubland',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/shrubland-img.png',
  },
  {
    id: 3,
    name: 'New York',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/new-york-img.png',
  },
  {
    id: 4,
    name: 'Escarpment',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/escarpment-img.png',
  },
  {
    id: 5,
    name: 'Westminster Abbey',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png',
  },
  {
    id: 6,
    name: 'South Downs National Park',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png',
  },
  {
    id: 7,
    name: 'National Historic Site',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png',
  },
  {
    id: 8,
    name: 'Tower Bridge',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png',
  },
  {
    id: 9,
    name: 'Arc Here',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/arc-here-img.png',
  },
  {
    id: 10,
    name: 'Steeple',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/steeple-img.png',
  },
  {
    id: 11,
    name: 'Glaciokarst',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png',
  },
  {
    id: 12,
    name: 'Parco Nazionale delle Cinque Terre',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png',
  },
]

class App extends Component {
  state = {searchInput: '', destinationsSearchList: destinationsList}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsSearchList, searchInput} = this.state
    const searchResults = destinationsSearchList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Destination Search</h1>
        <div className="search-input">
          <input
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            id="searchLabel"
            className="search-input-container"
          />
          <label htmlFor="searchLabel">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search"
            />
          </label>
        </div>
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <DestinationSearch userDetails={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
