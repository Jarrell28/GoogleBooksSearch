import React from 'react';

const Results = (props) => {

    return (
        <div className="p-3 border border-primary rounded my-3">
            <div className="d-flex justify-content-between">
                <h4 className="text-primary my-2">Harry Potter's Bookshelf</h4>
                <div>
                    <button className="btn btn-outline-primary btn-sm mr-2">View</button>
                    <button className="btn btn-outline-primary btn-sm">Save</button>
                </div>
            </div>
            <h5 className="text-primary my-2">The Great Books behind the Hogwarts Adventures</h5>
            <h6 className="text-primary my-3">Written By John Granger</h6>

            <div className="d-flex mt-4">
                <div className="mr-4">
                    <img src="https://via.placeholder.com/150" />
                </div>
                <p className="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus sit amet nunc sit amet egestas. Donec facilisis mollis iaculis. Nullam at mi ornare, lacinia dui sed, vestibulum lorem. Ut sed ipsum ut arcu suscipit pretium vitae in arcu. Cras cursus, urna sit amet ultrices feugiat, turpis felis laoreet augue, eu accumsan orci lorem sit amet magna. Etiam tempor tortor vitae nisl fermentum tempus id non felis. In scelerisque, libero vel consequat suscipit, nunc lacus imperdiet lectus, sed consequat risus nisi ac augue. Nam at ultricies justo. Aenean hendrerit ex ex. Vivamus ullamcorper scelerisque risus. Mauris imperdiet neque non est luctus volutpat. Maecenas diam massa, eleifend suscipit neque id, lobortis tempus turpis. Vestibulum condimentum sit amet dolor eget consequat. Cras porttitor lacinia mauris, sit amet dapibus turpis ornare vel.</p>
            </div>
        </div>
    )
}

export default Results;