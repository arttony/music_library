import { GalleryItem } from "./galleryitem"
import { useState } from "react"

export function Gallery ({data}) {
    const songs = data.filter((result) => result.kind === "song" )
    


    return (
        <div className="gallery"> 
            {songs.map((song) => <GalleryItem song={song} key={song.trackId} />)}
        </div>
    )
}