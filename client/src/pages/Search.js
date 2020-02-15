import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import SearchBar from '../components/SearchBar';
import ResultsContainer from '../components/ResultsContainer';

import axios from 'axios';

const url = "https://www.googleapis.com/books/v1/volumes?q=";
const apiKey = "AIzaSyAaTN_4PoN3jSzEWC9NgrtGleEE-hbVSFM";

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: "",
            books: []
        }
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleSearch = event => {
        event.preventDefault();

        const searchTerm = this.state.term;

        axios.get(`${url}${searchTerm}&key=${apiKey}`).then(results => {
            this.setState({ term: "", books: results.data.items });
            console.log(results);
        });
    }




    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="mt-0">Google Books Search</h1>
                    <h2>Search for Books of Interest</h2>
                </Jumbotron>
                <SearchBar term={this.state.term} handleInputChange={this.handleInputChange} handleSearch={this.handleSearch} />
                <ResultsContainer books={this.state.books} />

            </div>
        )
    }
}

export default Search;