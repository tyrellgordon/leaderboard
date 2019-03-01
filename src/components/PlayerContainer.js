import React, { Component } from 'react'
import PlayersList from './PlayersList'


class PlayerContainer extends Component {


  constructor(props){
    super(props)
    this.state = {  playerArray: [],

    }
  }

  componentDidMount(){

    this.interval = setInterval(() => {
      fetch('https://xquestleaderboardapi.herokuapp.com/users')
      .then(res => res.json())
      .then(data => {
        this.setState({playerArray: data})
      })

    }, 5000)

  }


  filteredPlayers = () => {

    return this.state.playerArray.sort(function (a, b) {

  return b.score - a.score;

});



  }



  render() {

    console.log(this.state)
    return (
      <span>

        <PlayersList playerArray={this.filteredPlayers()}/>
      </span>
    )
  }
}

export default PlayerContainer
