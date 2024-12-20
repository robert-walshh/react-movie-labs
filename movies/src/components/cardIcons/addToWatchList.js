import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'



const AddToWatchListIcon = ({movie}) => {
    const context = useContext(MoviesContext);
    const handleAddToWatchList = (e) => {
        e.preventDefault();
        context.addToWatchList(movie);
    };


    return (
        <IconButton aria-label="Add to WatchList" onClick={handleAddToWatchList}>
            <PlaylistAddIcon color="primary" fontSize="large"/>
        </IconButton>
    );
};

export default AddToWatchListIcon