import React from 'react'
import Player from './Player'

const PlayersList = (props) => {




  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Name
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Score
            </h3>
          </th>

        </tr>


      </tbody>
    </table>
  )
}

export default PlayersList
