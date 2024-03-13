import React from "react"
import Search from "./Search"
import { getInitialData } from "../utils"

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: getInitialData(),
            searchQuery: "",
            setInput: ""
        }

        this.onSearchHandler = this.onSearchHandler.bind(this)
    }

    onSearchHandler(searchQuery) {
        const filtered = this.state.notes.filter((note) =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        return filtered
    }

    render() {
        return (
            <header className="border-cyan-500 border-b-2 flex justify-between px-2 pb-4">
                <h1 className="text-white text-3xl font-bold">Notes</h1>
                <Search />
            </header>
        )
    }
}

// function Header() {
//     return (
//         <header className="border-cyan-500 border-b-2 flex justify-between px-2 pb-4">
//             <h1 className="text-white text-3xl font-bold">Notes</h1>
//             <Search />
//         </header>
//     )
// }

export default Header