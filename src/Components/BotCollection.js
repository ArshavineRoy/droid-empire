function BotCollection ({ bots, addToFavorites, addToArmy }){

    return (
        <>
            <h3>Bot Collection</h3>
            <div className="collection display-bots flex-wrap" >
                {bots.length === 0 ? (<h3>No bots available at this time. </h3>) : (
                    bots.map(({id, name, health, damage, armor, bot_class, catchphrase, avatar_url}) => (
                        <div className="card" key={id}>
                            <img 
                                src={avatar_url}
                                className="card-img-top bot-specs"
                                alt="bot imgae"                
                            />
                            <div className="card-body bot-specs">
                                <h5 className="card-title">{name} <span> {bot_class}</span></h5>
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
            
        </>
    )

}


export default BotCollection;