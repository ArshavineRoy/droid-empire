import React, { useState } from 'react';

function Army (){

    const [army, setArmy] = useState([])

    return (
        <div>
        <h3>Your Army</h3>
        <div className="army display-bots flex-wrap">
            <div className="card">
            <img
                src="https://robohash.org/sedhicquo.png?size=300x300&set=set1"
                className="card-img-top bot-specs"
                alt="..."
            />
            <div className="card-body bot-specs">
                <h5 className="card-title">wHz-93 <span>Class Icon</span></h5>
                <p className="card-text">1010010101001101100011000111101</p>
            </div>
            <ul className="list-group list-group-flush bot-info">
                <li className="list-group-item">
                <i className="fa-solid fa-heart-pulse" style={{ color: '#1f2951' }}> 94</i>
                <i className="fa-solid fa-bolt-lightning"> 20</i>
                <i className="fa-solid fa-shield-halved"> 63</i>
                </li>
            </ul>
            <div className="card-body d-flex justify-content-between">
                <a href="#" className="btn btn-danger">Discharge</a>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Army;
