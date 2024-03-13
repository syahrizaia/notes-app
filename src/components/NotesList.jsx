import React from "react"
import NotesItem from "./NotesItem"

function NotesList({ notes, onDelete, onArchive }) {
    if (notes.length === 0) {
        return (
            <div className="flex flex-col gap-4 sm:px-5 lg:px-10 xl:px-20">
                <h1 className="text-white text-2xl">Catatan Aktif</h1>
                <p className="text-white text-center">Tidak ada catatan</p>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col gap-4 sm:px-5 lg:px-10 xl:px-20">
                <h1 className="text-white text-2xl">Catatan Aktif</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {notes.map((note) => (
                        <NotesItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        {...note} />
                    ))}
                </div>
            </div>
        )
    }
}

export default NotesList