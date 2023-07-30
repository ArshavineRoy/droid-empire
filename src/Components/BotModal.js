import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function BotModal() {

    const [showModal, setShowModal] = useState(true);
    
    const handleClose = () => {
        setShowModal(false);
    };
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Bot Specifications</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="bot-modal d-flex px-5">
          <img
            src="https://robohash.org/sedhicquo.png?size=300x300&set=set1"
            className="card-img-top"
            alt="bot image"
          />

          <div className="bot-modal-card">
            <div className="card-body">
              <h3>Name: wHz-93</h3>
              <p>Catchphrase: 1010010101001101100011000111101</p>
              <h5>Class: Captain <i className="fa-solid fa-copyright" style={{ color: '#ff006f' }}></i></h5>
              <br />
              <div className="bot-modal-hda">
                <i className="fa-solid fa-heart-pulse fa-beat-fade" style={{ color: 'red' }}> 94</i>
                <i className="fa-solid fa-bolt-lightning" style={{ color: 'blue' }}> 20</i>
                <i className="fa-solid fa-shield" style={{ color: '#006102' }}> 63</i>
              </div>
              <br />
            </div>
            <div className="d-flex justify-content-between">
              <a href="#" className="btn btn-success">Enlist</a>
              <a href="#" className="btn btn-warning">Favorite</a>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default BotModal;
