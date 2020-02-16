import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import SavedContainer from '../components/SavedContainer';
import axios from 'axios';


class Saved extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        axios.get("/api/books").then(books => {
            console.log(books.data);
            this.setState({ books: books.data })
        });
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="mt-0">Google Books Search</h1>
                    <h2>Your Saved Books</h2>
                </Jumbotron>
                <SavedContainer books={this.state.books} />

            </div>
        )
    }
}

export default Saved;