import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/themeContext";
import {Link} from 'react-router-dom'

export function GalleryItem({ song }) {
  let [isExpanded, setIsExpanded] = useState(false);
  /* let [darkMode, setDarkMode] = useContext(ThemeContext) */

  const simpleStyle = {
    width: "25vw",
    height: "20vh",
    border: "1px solid black",
    margin: "2px",
  };

  const detailStyle = {
    width: "80vw",
    height: "20vh",
    border: "1px solid black",
    margin: "2px",
    backgroundImage: `url(${song.artworkUrl100})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "yellow",
  };


  const simpleView = (
    <div style={simpleStyle}>
      <h3>{song.trackName}</h3>
      <h4>{song.collectionName}</h4>
    </div>
)

  const detailView = (
    <div style={detailStyle}>
            <h2>{props.item.trackName}</h2>
            <h3>
                <Link to={`/artist/${props.item.artistId}`}>
                    {props.item.artistName}
                </Link>
            </h3>
            <h3>
                <Link to={`/album/${props.item.collectionId}`}>
                    {props.item.collectionName}
                </Link>
            </h3>
            <h4>{props.item.primaryGenreName}</h4>
            <h4>{props.item.releaseDate}</h4>
        </div>
  );
 

  return (
    <div onClick={() => setIsExpanded(!isExpanded)} 
        style={{ 'display': "inline-block" }}>
        {/* This simple ternary shows the simple view when 'view' is false! */}
        {isExpanded ? detailView : simpleView}
    </div>
  );
}
