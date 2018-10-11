import React from 'react'

const Player = (props) => {




  return (
    <tr>
      <td>{props.player.name}</td>
      <td>{props.player.score}</td>
    </tr>
  )
}

export default Player
