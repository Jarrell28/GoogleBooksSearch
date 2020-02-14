import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="container">
                <Jumbotron>
                    <h1 className="mt-0">Google Books Search</h1>
                    <h2>Search for Books of Interest</h2>
                </Jumbotron>
            </div>
        )
    }
}

export default Search;