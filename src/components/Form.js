import '../App.css';
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addNote} from '../redux/notes/notesSlice'

function Form() {
    const [note, setNote] = useState('')
    const [bgcolor, setBgcolor] = useState('#335D94')
    const [textcolor, setTextcolor] = useState('#FFFFFF')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!note) return;

        dispatch(addNote({note, bgcolor, textcolor}))

    setNote('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea className="new-todo" placeholder="enter your note here..." rows="10" cols="93"  value={note} onChange={(e) => setNote(e.target.value)} style={{ outline: 'none', border:"none" }} />
            <label htmlFor="">
                <div className="background-palette">
                    <span>Pick a background color:</span>
                    <input type="color" value={bgcolor} onChange={(e) => setBgcolor(e.target.value)}/>
                </div>
                <div className="text-color-palette">
                    <span>Pick a text color:</span>
                    <input type="color" value={textcolor} onChange={(e) => setTextcolor(e.target.value)}/>
                </div>                      
                <button className="addButton">ADD</button>
            </label>
        </form>
    )
}

export default Form
