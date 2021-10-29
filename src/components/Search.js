import React from 'react'; 
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import {getNote} from '../redux/notes/notesSlice'

function Search() {
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.notes.searchValue);

    const handleChange = (value) => {
        dispatch(getNote(value));
      };

    return (
        <div className="search">
            <input type="search" placeholder="Search..." value={searchValue} onChange={(e) => handleChange(e.target.value)}/>
        </div>
    )
}

export default Search
