import React, { Component } from 'react'
import PlayerContainer from './PlayerContainer'

import '../stylesheets/App.css'

class App extends Component {




  render() {

    return (


<div  id="sidebar">
<div> <div id="center">

</div>
    </div>
        <div  class ="wrapper" id="sidebar" className="ui segment black inverted">
          <h2 id="attribute"> Leaderboard</h2>
        </div>

        <PlayerContainer />

      </div>
    )
  }
}

export default App
