import React from 'react';
import Saved from '../Saved';
import axios from 'axios';

const SavedContainer = (props) => {

    const deleteBook = (id) => {
        axios.delete("/api/books/" + id).then(() => {
            window.location.reload(false);
        });
    }

    const books = props.books.map(book => {
        const id = book._id;
        return <Saved book={book} key={book._id} deleteBook={() => deleteBook(id)} />
    })



    if (books.length) {
        return (
            <div className="p-3 border border-primary rounded my-5">
                <h3 className="text-primary">Saved</h3>
                {books}
            </div>
        )
    } else {
        return (
            <div className="p-3 border border-primary rounded my-5">
                <h3 className="text-primary">No Saved Books</h3>
            </div>
        )
    }
}

export default SavedContainer;