import React from 'react';
import axios from 'axios';

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.book.title;
        this.authors = props.book.authors;
        this.image = props.book.image;
        this.description = props.book.description || "Description Unavailable";
        this.link = props.book.link;
    }


    render() {
        return (
            <div className="p-3 border border-primary rounded my-3" >
                <div className="d-flex justify-content-between">
                    <h5 className="text-primary mt-2">{this.title}</h5>
                    <div>
                        <a href={this.link} className="btn btn-outline-primary btn-sm mr-2 text-primary" target="_blank">View</a>
                        <button className="btn btn-sm btn-outline-primary" onClick={this.props.deleteBook}>Delete</button>
                    </div>
                </div>
                <h6 className="text-primary mt-2 mb-3">Written By {this.authors ? this.authors.join(", ") : "Unknown Author"}</h6>

                <div className="d-flex mt-4">
                    <div className="mr-4">
                        <img src={this.image.thumbnail ? this.image.thumbnail : this.image} style={{ maxWidth: "150px", height: "auto" }} />
                    </div>
                    <p className="text-primary">{this.description}</p>
                </div>
            </div>
        )
    }
}

export default Saved;