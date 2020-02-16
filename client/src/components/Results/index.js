import React from 'react';
import axios from 'axios';

class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            saved: false
        }

        this.title = props.book.volumeInfo.title;
        this.authors = props.book.volumeInfo.authors;
        this.image = props.book.volumeInfo.imageLinks || "https://via.placeholder.com/150";
        this.description = props.book.volumeInfo.description || "Description Unavailable";
        this.link = props.book.volumeInfo.infoLink;
    }

    saveBook = () => {
        const book = {
            title: this.title,
            authors: this.authors,
            image: this.image.thumbnail ? this.image.thumbnail : this.image,
            description: this.description,
            link: this.link
        };
        axios.post("/api/books", { book }).then(response => {
            this.setState({ saved: true })
        });
    }


    render() {
        return (
            <div className="p-3 border border-primary rounded my-3" >
                <div className="d-flex justify-content-between">
                    <h5 className="text-primary mt-2">{this.title}</h5>
                    <div>
                        <a href={this.link} className="btn btn-outline-primary btn-sm mr-2" target="_blank">View</a>
                        <button className={this.state.saved ? "btn btn-sm btn-primary" : "btn btn-sm btn-outline-primary"} onClick={this.saveBook}>{this.state.saved ? "Saved!" : "Save"}</button>
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

export default Results;