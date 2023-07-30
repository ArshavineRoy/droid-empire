import React from 'react';

function Filter () {
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
