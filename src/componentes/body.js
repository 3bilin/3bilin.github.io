import React from 'react';

function Body(){
    return(
        <div className="container">
            <div className="input-group input-group-sm mb-3 mt-5 mw-100">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Search</span>
                </div>
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
            </div>
        </div>
    )
}

export default Body;