import React from 'react'

const Player = (props) => {




  return (
    <tr>
      <td id="value">{props.player.name}</td>
      <td id="value">{props.player.score}</td>
    </tr>
  )
}

export default Player
