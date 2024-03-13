import React from "react"
import NotesItemBody from "./NotesItemBody"
import DeleteButton from "./DeleteButton"
import ArchivesButton from "./ArchivesButton"

function NotesItem({ title, createdAt, body, id, onDelete, onArchive }) {
    return (
        <div className="border-cyan-500 border-2 rounded-md flex flex-col justify-between gap-4 p-2">
            <NotesItemBody title={title} createdAt={createdAt} body={body} />
            <div className="grid grid-cols-2 gap-2">
                <DeleteButton id={id} onDelete={onDelete} />
                {/* <ArchivesButton id={id} onArchive={onArchive} /> */}
            </div>
        </div>
    )
}

export default NotesItem