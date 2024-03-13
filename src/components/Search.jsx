import React from "react"

// class Search extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             id: +new Date(),
//             title: ''
//         }

//         this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this)
//     }

//     onSearchChangeEventHandler(event) {
//         this.setState(() => {
//             return {
//                 title: event.target.value
//             }
//         })
//     }

//     render() {
//         return (
//             <div className="flex justify-between px-4">
//                 <input
//                     className="bg-black text-white border-cyan-500 border-2 p-2 rounded-md w-60 sm:w-80"
//                     type="text"
//                     placeholder="Cari Catatan"
//                     value={this.state.title}
//                     onChange={this.onSearchChangeEventHandler}
//                 />
//             </div>
//         )
//     }
// }

function Search({ keyword, setKeyword }) {
    return (
        <div className="flex justify-between px-4">
            <input
                key="title"
                type="text"
                placeholder="Cari Catatan"
                onChange={(event) => setKeyword(event.target.value)}
                className="bg-black text-white border-cyan-500 border-2 p-2 rounded-md w-60 sm:w-80"
            />
        </div>
    )
}

export default Search