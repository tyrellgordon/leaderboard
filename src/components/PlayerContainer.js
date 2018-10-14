import React, { Component } from 'react'
import PlayersList from './PlayersList'
import Search from './Search'


class PlayerContainer extends Component {


  constructor(props){
    super(props)
    this.state = {  playerArray: [],

    }
  }

  componentDidMount(){

    fetch('http://localhost:3001/users')
    .then(res => res.json())
    .then(data => {
      this.setState({playerArray: data})
    })

  }


  filteredPlayers = () => {

    return this.state.playerArray

  }



  render() {


    return (
      <span>
        <Search />
        <PlayersList playerArray={this.filteredPlayers()}/>
      </span>
    )
  }
}

export default PlayerContainer
