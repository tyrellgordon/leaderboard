import React, { Component } from 'react'
import PlayersList from './PlayersList'
import Search from './Search'


class PlayerContainer extends Component {






  render() {



    return (
      <div>
        <Search handleChange={this.props.handleChange}/>
        <PlayersList transactionArray={this.searchFunction()} />
      </div>
    )
  }
}

export default PlayerContainer
