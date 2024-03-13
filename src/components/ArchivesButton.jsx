import React from "react"

function ArchivesButton({ id, onArchive }) {
    return (
        <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold p-2 rounded-lg"
            onClick={() => onArchive(id)}
        >
            Arsipkan
        </button>
    )
}

export default ArchivesButton