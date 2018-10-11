import React from 'react'

const Search = (props) => {
  return (
    <div className="ui huge fluid icon input">
      <input
        onChange={props.handleChange}
        type="text"
        placeholder={"Search for player"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
