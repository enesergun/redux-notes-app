import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
    name: 'notes',
    initialState : {
        items:[
            
            {
                note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, quas dolore exercitationem ullam architecto cumque, qui quos non minima minus saepe ab. Quos porro adipisci architecto nam id incidunt illum.",
                color: "red",
            },
            {
                note:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, quas dolore exercitationem ullam architecto cumque, qui quos non minima minus saepe ab. Quos porro adipisci architecto nam id incidunt illum.",
                color:"blue",
            },
            {
                note:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, quas dolore exercitationem ullam architecto cumque, qui quos non minima minus saepe ab. Quos porro adipisci architecto nam id incidunt illum.",
                color:"green",
            },
            {
                note:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, quas dolore exercitationem ullam architecto cumque, qui quos non minima minus saepe ab. Quos porro adipisci architecto nam id incidunt illum.",
                color:"black",
            },
            {
                note:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, quas dolore exercitationem ullam architecto cumque, qui quos non minima minus saepe ab. Quos porro adipisci architecto nam id incidunt illum.",
                color:"yellow",
            }
        ],
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload)
        }
    },
});


export const {addNote} = notesSlice.actions;

export default notesSlice.reducer;