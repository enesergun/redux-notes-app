import { createSlice } from '@reduxjs/toolkit';


export const notesSlice = createSlice({
    name: 'notes',
    initialState : {
        items: [],
        searchValue: '',
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload)
        },
        getNote: (state, action) => {
            state.searchValue = action.payload; 
        }
    },
});


export const {addNote, getNote} = notesSlice.actions;

export default notesSlice.reducer;