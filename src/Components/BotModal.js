import React from 'react';
import { Modal } from 'react-bootstrap';

function BotModal({bot, onClose}) {

    if (!bot) return null;

    const { name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Bot Specifications</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="bot-modal d-flex px-5">
                    <img
                        src={avatar_url}
                        className="card-img-top"
                        alt="bot image"
                    />

                    <div className="bot-modal-card">
                        <div className="card-body">
                        <h3>Name: {name}</h3>
                        <p style={{ wordWrap: 'break-word' }}>Catchphrase: {catchphrase}</p>
                        <h5>Class: {bot_class}</h5>
                        <br />
                        <div className="bot-modal-hda">
                            <i className="fa-solid fa-heart-pulse fa-beat-fade" style={{ color: 'red' }}> {health}</i>
                            <i className="fa-solid fa-bolt-lightning" style={{ color: 'blue' }}> {damage}</i>
                            <i className="fa-solid fa-shield" style={{ color: '#006102' }}> {armor}</i>
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
