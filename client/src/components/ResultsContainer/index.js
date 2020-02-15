import React from 'react';
import Results from '../Results';

const ResultsContainer = (props) => {

    const books = props.books.map(book => {
        return <Results book={book} key={book.id} />
    })

    if (books.length) {
        return (
            <div className="p-3 border border-primary rounded my-5">
                <h3 className="text-primary">Results</h3>
                {books}
            </div>
        )
    } else {
        return (
            <div className="p-3 border border-primary rounded my-5">
                <h3 className="text-primary">Search For Books!</h3>
            </div>
        )
    }
}

export default ResultsContainer;