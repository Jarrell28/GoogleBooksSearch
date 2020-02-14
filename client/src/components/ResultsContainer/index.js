import React from 'react';
import Results from '../Results';

const ResultsContainer = (props) => {

    return (
        <div className="p-3 border border-primary rounded my-5">
            <h3 className="text-primary">Results</h3>
            <Results />
            <Results />
            <Results />
        </div>
    )
}

export default ResultsContainer;