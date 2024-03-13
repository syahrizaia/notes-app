import React from "react"

function DeleteButton({ id, onDelete }) {
    return (
        <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded-lg"
            onClick={() => onDelete(id)}
        >
            Delete
        </button>
    )
}

export default DeleteButton