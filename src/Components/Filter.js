import React,  { useState } from 'react';

function Filter ({ onFilterChange }) {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
          setSelectedFilters((prevSelectedFilters) => [...prevSelectedFilters, value]);
        } else {
          setSelectedFilters((prevSelectedFilters) => prevSelectedFilters.filter((filter) => filter !== value));
        }
    };

    useEffect(() => {
        if (onFilterChange) {
          onFilterChange(selectedFilters);
        }
    }, [selectedFilters, onFilterChange]);


    return (
        <div className="container ms-0 my-5 filter" id="filterContent">
        <h4>Filter by class</h4>
        <div className="d-flex justify-content-between mt-3">
            <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                value="Support"
                id="chkSupport"
                checked={selectedFilters.includes('Support')}
                onChange={handleFilterChange}
            />
            <label className="form-check-label" htmlFor="chkSupport">
                Support
                <i
                className="fa-solid fa-jet-fighter fa-beat-fade"
                style={{ color: '#d30993' }}
                ></i>
            </label>
            </div>
            <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                value="Medic"
                id="chkMedic"
                checked={selectedFilters.includes('Medic')}
                onChange={handleFilterChange}
            />
            <label className="form-check-label" htmlFor="chkMedic">
                Medic
                <i
                className="fa-solid fa-briefcase-medical fa-beat-fade"
                style={{ color: '#d30993' }}
                ></i>
            </label>
            </div>
            <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                value="Assault"
                id="chkAssault"
                checked={selectedFilters.includes('Assault')}
                onChange={handleFilterChange}
            />
            <label className="form-check-label" htmlFor="chkAssault">
                Assault
                <i
                className="fa-solid fa-gun fa-beat-fade"
                style={{ color: '#d30993' }}
                ></i>
            </label>
            </div>
            <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                value="Defender"
                id="chkDefender"
                checked={selectedFilters.includes('Defender')}
                onChange={handleFilterChange}
            />
            <label className="form-check-label" htmlFor="chkDefender">
                Defender
                <i
                className="fa-solid fa-shield-halved fa-beat-fade"
                style={{ color: '#d30993' }}
                ></i>
            </label>
            </div>
            <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                value="Captain"
                id="chkCaptain"
                checked={selectedFilters.includes('Captain')}
                onChange={handleFilterChange}
            />
            <label className="form-check-label" htmlFor="chkCaptain">
                Captain
                <i
                className="fa-solid fa-copyright fa-beat-fade"
                style={{ color: '#d30993' }}
                ></i>
            </label>
            </div>
            <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                value="Witch"
                id="chkWitch"
                checked={selectedFilters.includes('Witch')}
                onChange={handleFilterChange}
            />
            <label className="form-check-label" htmlFor="chkWitch">
                Witch
                <i
                className="fa-solid fa-hat-wizard fa-beat-fade"
                style={{ color: '#d30993' }}
                ></i>
            </label>
            </div>
        </div>
        </div>
    );
};

export default Filter;
