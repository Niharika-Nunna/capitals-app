import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onSelected = event => {
    this.setState({capitalId: event.target.value})
  }

  getCountry = id => {
    const activeCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === id,
    )
    console.log(activeCountry.country)
    return activeCountry.country
  }

  render() {
    const {capitalId} = this.state
    const country = this.getCountry(capitalId)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div>
            <select
              id="cars"
              className="capital-list"
              value={capitalId}
              onChange={this.onSelected}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <span className="question">is capital of which country?</span>
          </div>
          <p className="country-title">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
