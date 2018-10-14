import React, { Component } from 'react'
import PlayerContainer from './PlayerContainer'

import '../stylesheets/App.css'

class App extends Component {




  render() {

    return (
      <div className="ui raised  segment">
        <div className="ui segment black inverted">
          <h2> Leaderboard</h2>
        </div>

        <PlayerContainer />

      </div>
    )
  }
}

export default App
