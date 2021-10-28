import React from 'react'
import '../App.css';
import {useDispatch, useSelector} from 'react-redux'


function Notes() {
    const items = useSelector((state) => state.notes.items);
    console.log(items);

    return (
        <div className="notes">
            <div className="notes-container">
                {
                    items.map((item, key) => (
                        <div key={key} className="note" style={{background: item.color}}>
                            {item.note}
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Notes
