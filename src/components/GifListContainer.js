import React, {useState} from "react"

import GifList from "./GifList"
import GifSearch from "./GifSearch"


const GifListContainer = () => {

    const [gifLists, setGifLists] = useState([])
    const  [searchTerm, setSearchTerm] = useState("")


    const handleSearch = () => {
    

        const api = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
        console.log(searchTerm)
        fetch(api)
         .then(resp => resp.json())
         .then(data => setGifLists(data.data.slice(0,3)))

    }

   


  







    return (
        <>
       <GifSearch onSearchHandle={handleSearch} searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm}/>
       <GifList gifLists={gifLists}/>
       </>
    )

}

export default GifListContainer