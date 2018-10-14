import React from 'react'
import Player from './Player'

const PlayersList = (props) => {

  let player = () => {
    return props.playerArray.map((player) => {

    return  <Player key={player.id} player={player}/>

    })
  }




  return (


    <table className="ui selectable inverted table">
      <tbody>
        <tr>
          <th>
            <h3 >
              Name
            </h3>
          </th>
          <th>
            <h3 >
              Score
            </h3>
          </th>

        </tr>

        {player()}

      </tbody>
    </table>
  )
}

export default PlayersList
