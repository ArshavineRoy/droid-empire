import React, { useState } from 'react';
import BotModal from './BotModal';
import getBotIcon from "./getBotIcon"; // Import the getBotIcon helper function

function BotCollection ({ bots, addToFavorites, addToArmy, selectedFilters }){

    // Filtering bots based on selected filters: at least one criteria should be selected,
    // otherwise, work with original bots
    // Check if if they have the classes in selectedFilters. Use this list to map and render
    const filteredBots = selectedFilters.length > 0 ? bots.filter(
        bot => selectedFilters.includes(bot.bot_class)) : bots;


    const [isModalOpen, setModalOpen] = useState(false);

    // Function to handle click events on bot specs
    const handleBotSpecsClick = () => {
        setModalOpen(true);
    };

    return (
        <>
            <h3>Bot Collection</h3>
            <div className="collection display-bots flex-wrap" >
                {filteredBots.length === 0 ? (<h3>No bots available at this time. </h3>) : (
                    filteredBots.map(({id, name, health, damage, armor, bot_class, catchphrase, avatar_url}) => (
                        <div className="card" key={id} onClick={handleBotSpecsClick}>
                            <img 
                                src={avatar_url}
                                className="card-img-top bot-specs"
                                alt="bot imgae"                
                            />
                            <div className="card-body card-name bot-specs">
                                <h5 className="card-title">{name} <span>  {getBotIcon(bot_class)}</span></h5>
                                <p className="card-text">{catchphrase}</p>
                            </div>
                            <ul className="list-group list-group-flush bot-info">
                                <li className="list-group-item">
                                <i className="fa-solid fa-heart-pulse"> {health}</i>
                                <i className="fa-solid fa-bolt-lightning"> {damage}</i>
                                <i className="fa-solid fa-shield-halved"> {armor}</i>
                                </li>
                            </ul>
                            <div className="card-body d-flex justify-content-between">
                                <a href="#" className="btn btn-success" onClick={(e) => {
                                    e.preventDefault();
                                    addToArmy({ id, name, health, damage, armor, bot_class, catchphrase, avatar_url })}
                                }
                                >Enlist</a>
                                <a href="#" className="btn btn-warning" onClick={(e) =>{ 
                                    e.preventDefault();
                                    addToFavorites({ id, name, health, damage, armor, bot_class, catchphrase, avatar_url })}}>Favorite</a>
                            </div>
                        </div>
                        )
                    )
                )}
            </div>
            {/* conditionally render the modal component based on the state */}
            {isModalOpen && <BotModal />}
            
        </>
    )

}


export default BotCollection;