import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="Description"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://miro.medium.com/max/1838/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                        alt="img"
                    />
                </div>
            </div>
        </div>
    )
}
