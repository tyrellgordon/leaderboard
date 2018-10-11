import React, { Component } from 'react'
import PlayerContainer from './PlayerContainer'

import '../stylesheets/App.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {transactionArray: [],
                  searchTerm: ''
    }
  }

  componentDidMount(){

    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(data => {
      this.setState({transactionArray: data})
    })
}


  render() {

    return (
      <div className="ui raised segment">
        <div className="ui segment black inverted">
          <h2> Leaderboard</h2>
        </div>

        <PlayerContainer  searchTerm={this.state.searchTerm} handleChange={this.handleChange} transactionArray={this.state.transactionArray}/>

      </div>
    )
  }
}

export default App
