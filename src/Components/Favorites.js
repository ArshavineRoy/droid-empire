import React from "react";
import getBotIcon from "./getBotIcon";

function Favorites({ favorites, removeFromFavorites, addToArmy }) {
  return (
  
    <>
      <h2>Favorites</h2>   
        <div className="favorites flex-wrap">
            {favorites.length === 0 ? (
                <div className="no-bots">
                    <div className="🤚">
                        <div className="👉"></div>
                        <div className="👉"></div>
                        <div className="👉"></div>
                        <div className="👉"></div>
                        <div className="🌴"></div>		
                        <div className="👍"></div>
                    </div>
                    <h5 style={{color: "red"}}>
                        Uh oh! There are no bots here. Use the Favorite button to add them.
                    </h5>
                </div>

        ) : (
          favorites.map(({ id, name, health, damage, armor, bot_class, catchphrase, avatar_url }) => (
            <div className="card" key={id}>
              <img
                src={avatar_url}
                className="card-img-top bot-specs"
                alt="bot image"
              />
              <div className="card-body card-name bot-specs">
                <h5 className="card-title">
                  {name} <span> {getBotIcon(bot_class)}</span>
                </h5>
                <p className="card-text" style={{ wordWrap: 'break-word' }}>
                  {catchphrase}
                </p>
              </div>
              <ul className="list-group list-group-flush bot-info">
                <li className="list-group-item">
                  <i className="fa-solid fa-heart-pulse"> {health}</i>
                  <i className="fa-solid fa-bolt-lightning"> {damage}</i>
                  <i className="fa-solid fa-shield-halved"> {armor}</i>
                </li>
              </ul>
              <div className="card-body d-flex justify-content-between">
                <a
                  href="#"
                  className="btn btn-success"
                  onClick={(e) => {
                    e.preventDefault();
                    addToArmy({
                      id,
                      name,
                      health,
                      damage,
                      armor,
                      bot_class,
                      catchphrase,
                      avatar_url,
                    });
                  }}
                >
                  Enlist
                </a>
                <a
                  href="#"
                  className="btn btn-info"
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromFavorites(id);
                  }}
                >
                  Remove
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Favorites;
