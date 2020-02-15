import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import SearchBar from '../components/SearchBar';
import ResultsContainer from '../components/ResultsContainer';

const url = "https://www.googleapis.com/books/v1/volumes?q=";
const apiKey = "AIzaSyAaTN_4PoN3jSzEWC9NgrtGleEE-hbVSFM";

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="mt-0">Google Books Search</h1>
                    <h2>Search for Books of Interest</h2>
                </Jumbotron>
                <SearchBar />
                <ResultsContainer />

            </div>
        )
    }
}

export default Search;