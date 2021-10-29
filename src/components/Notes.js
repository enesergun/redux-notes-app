import React from 'react'
import '../App.css';
import { useSelector} from 'react-redux'


function Notes() {
    const items = useSelector((state) => state.notes.items);
    const searchValue = useSelector((state) => state.notes.searchValue);


    let filtered = items;

    if (searchValue && searchValue !== "") {
        const aranacakkelime = searchValue.toLowerCase();
        if (aranacakkelime && aranacakkelime !== "") {
        filtered = items.filter((element) =>
            element.note.toLowerCase().includes(aranacakkelime)
        );
        } else {
        filtered = items;
        }
    }

    return (
        <div className="notes">
            <div className="notes-container">
                {
                    filtered.map((item, key) => (
                        <div key={key} className="note" style={{background: item.bgcolor, color:item.textcolor}}>
                            {item.note}
                        </div>
                    ))
                }                
            </div>
        </div>
    )
}

export default Notes
