import React, { Component } from 'react'
import PlayerContainer from './PlayerContainer'

import '../stylesheets/App.css'

class App extends Component {




  render() {

    return (


      <div >
      <div> <div id="center">
  <h1 id="logo">XQuest</h1>
</div></div>
        <div className="ui segment black inverted">
          <h2 id="attribute"> Leaderboard</h2>
        </div>

        <PlayerContainer />

      </div>
    )
  }
}

export default App
