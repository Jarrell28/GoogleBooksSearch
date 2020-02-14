import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import SearchBar from '../components/SearchBar';
import ResultsContainer from '../components/ResultsContainer';


class Saved extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="mt-0">Google Books Search</h1>
                    <h2>Your Saved Books</h2>
                </Jumbotron>
                <ResultsContainer />

            </div>
        )
    }
}

export default Saved;