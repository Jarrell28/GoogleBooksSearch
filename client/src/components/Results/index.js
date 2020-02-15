import React from 'react';

const Results = (props) => {

    const authors = props.book.volumeInfo.authors;
    const image = props.book.volumeInfo.imageLinks || "https://via.placeholder.com/150";
    const description = props.book.volumeInfo.description || "Description Unavailable";
    const link = props.book.volumeInfo.infoLink;


    return (
        <div className="p-3 border border-primary rounded my-3">
            <div className="d-flex justify-content-between">
                <h5 className="text-primary mt-2">{props.book.volumeInfo.title}</h5>
                <div>
                    <a href={link} className="btn btn-outline-primary btn-sm mr-2" target="_blank">View</a>
                    <button className="btn btn-outline-primary btn-sm">Save</button>
                </div>
            </div>
            <h6 className="text-primary mt-2 mb-3">Written By {authors ? authors.join(", ") : "Unknown Author"}</h6>

            <div className="d-flex mt-4">
                <div className="mr-4">
                    <img src={image.thumbnail ? image.thumbnail : image} style={{ maxWidth: "150px", height: "auto" }} />
                </div>
                <p className="text-primary">{description}</p>
            </div>
        </div>
    )
}

export default Results;