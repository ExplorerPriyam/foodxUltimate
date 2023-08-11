import React from 'react'

const Search = () => {
  return (
    <form className="d-flex mt-3" role="search">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success bg-black text-white" type="submit">Search</button>
  </form>
  )
}

export default Search;