import React from "react"

class NotesInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: +new Date(),
            title: '',
            body: '',
            archived: false,
            createdAt: +new Date()
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            }
        })
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault()
        this.props.addNote(this.state)
    }

    render() {
        return (
            <div className="flex flex-col gap-4 p-10 sm:px-20 lg:px-40 xl:px-80">
                <h1 className="text-white text-2xl">Buat Catatan</h1>
                <p className="text-cyan-500 text-sm text-end">Sisa Karakter: 50</p>
                <form className="flex flex-col gap-4" onSubmit={this.onSubmitEventHandler}>
                    <input
                    className="bg-black text-white border-cyan-500 border-2 p-2 rounded-md"
                    type="text"
                    placeholder="Ini adalah judul"
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler} />
                    <textarea
                    className="bg-black text-white border-cyan-500 border-2 p-2 rounded-md h-28"
                    type="text"
                    placeholder="Tuliskan catatanmu di sini"
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler} />
                    <button
                    className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold p-2 rounded-lg"
                    type="submit">
                        Buat
                    </button>
                </form>
            </div>
        )
    }
}

export default NotesInput