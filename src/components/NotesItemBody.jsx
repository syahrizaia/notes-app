import React from 'react'
import { showFormattedDate } from '../utils'

function NotesItemBody({ title, createdAt, body }) {
    return (
        <div className='flex flex-col gap-1'>
            <h2 className='text-white text-xl font-bold'>{title}</h2>
            <p className='text-cyan-500 text-sm'>{showFormattedDate(createdAt)}</p>
            <p className='text-white'>{body}</p>
        </div>
    )
}

export default NotesItemBody