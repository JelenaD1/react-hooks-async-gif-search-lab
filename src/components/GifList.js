import React from "react"

const GifList = ({gifLists}) => {

    const gifsToShow = gifLists.map(gif => {
        return (
            <>
        <li>{gif.username}</li>
        <img src={gif.images.original.url} alt={gif.images.original.url} />
        </>
        
        
        )

    })



    return (
        <ul>
            {gifsToShow}


        </ul>
    )
}

export default GifList