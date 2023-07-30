function Favorites({ favorites, removeFromFavorites, addToArmy }) {
  return (
    <>
        <h3>Favorites</h3>
        <div className="favorites flex-wrap">
            {favorites.map(({ id, name, health, damage, armor, bot_class, catchphrase, avatar_url }) => (
                <div className="card" key={id}>
                    <img 
                        src={avatar_url}
                        className="card-img-top bot-specs"
                        alt="bot imgae"                
                    />
                    <div className="card-body card-name bot-specs">
                        <h5 className="card-title">{name}  <span>{bot_class}</span></h5>
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
                            }>
                            Enlist
                        </a>
                        <a href="#" className="btn btn-info" onClick={(e) => {
                            e.preventDefault();
                            removeFromFavorites(id)}}
                            >
                            Remove
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </>
  );
}

export default Favorites;
