import React, {useState} from 'react';
import iphone13 from '../iphone13.jpg'




function Cards({onClick}) {
    
    return(
        <div className="card col-6 m-auto mt-4" style={{width: '18rem'}}>
            <img className="card-img-top" src={iphone13} alt="Card image cap" data-toggle="modal" data-target="#exampleModal" onClick={onClick}/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Maca:</p>
                    <p className="card-text">Modelo:</p>
                    <p className="card-text">Precio:</p>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="button">+</button>
                                <button className="btn btn-outline-secondary" type="button">-</button>
                            </div>
                        <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                        </div>
                </div>
        </div>
    )
}

export default Cards;