import React from "react"

const GifSearch = ({onSearchHandle, searchTerm, setSearchTerm}) => {


    const handleChange = (event) => {
        setSearchTerm(event.target.value)
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        onSearchHandle()
      }



     return (
    <form onSubmit={handleSubmit} className="searchbar">
      <label htmlFor="search">Search Gifs:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
        value={searchTerm}
      />
      <button>Search</button>
    </form>
  );
}

export default GifSearch