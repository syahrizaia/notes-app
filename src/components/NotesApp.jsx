import React from "react"
import NotesList from "./NotesList"
import { getInitialData } from "../utils"
import NotesInput from "./NotesInput"
import Header from "./Header"
import ArchivesList from "./ArchivesList"

class NotesApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: getInitialData()
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onArchivesHandler = this.onArchivesHandler.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onSearchHandler = this.onSearchHandler.bind(this)
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({ notes })
    }

    onArchivesHandler(id) {
        // const notes = this.state.notes.filter(note => note.archived === true)
        // this.setState({ notes })

        const newNotes = [...this.state.notes]
        const noteIndex = this.state.notes.findIndex(note => note.id === id)
        newNotes[noteIndex].archived = !this.state.notes[noteIndex].archived
        this.setState({notes: newNotes})
    }

    onAddNoteHandler({ title, body, createdAt, archived }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        createdAt: new Date().toISOString(),
                        body,
                        archived: false
                    }
                ]
            }
        })
    }

    onSearchHandler(keyword) {
        const notes = this.state.notes.filter(note => note.title.includes(keyword))
        this.setState({ notes })
    }

    render() {
        return (
            <div className="bg-black flex flex-col gap-4 p-4">
                <Header />
                <NotesInput addNote={this.onAddNoteHandler} />
                <NotesList
                notes={this.state.notes}
                onDelete={this.onDeleteHandler}
                onArchive={this.onArchivesHandler} />
                {/* <ArchivesList
                notes={this.state.notes}
                onDelete={this.onDeleteHandler}
                onArchive={this.onArchivesHandler} /> */}
            </div>
        )
    }
}

export default NotesApp