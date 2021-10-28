import '../App.css';
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addNote} from '../redux/notes/notesSlice'

function Form() {
    const [note, setNote] = useState('')
    const [color, setColor] = useState('#335D94')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({note, color}))

    setNote('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea className="new-todo" placeholder="enter your note here..." rows="10" cols="100"  value={note} onChange={(e) => setNote(e.target.value)} autoFocus />
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
            <button>add</button>
        </form>
    )
}

export default Form
