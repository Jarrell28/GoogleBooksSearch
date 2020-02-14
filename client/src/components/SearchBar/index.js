import React from 'react';

const SearchBar = (props) => {

    return (
        <div className="p-3 border border-primary rounded mt-5">
            <h3 className="text-primary mb-4">Book Search</h3>
            <form>
                <div className="form-group">
                    <label for="book" className="text-primary">Book</label>
                    <input type="text" className="form-control mb-4" id="book" placeholder="Search Book" />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;