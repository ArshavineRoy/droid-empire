function Favorites({ favorites }) {
  return (
    <>
      <h3>Favorites</h3>
      <div className="favorites display-bots flex-wrap">
        {favorites.map(({ id, name, bot_class, catchphrase, avatar_url }) => (
          <div className="card" key={id}>
            <img
              src={avatar_url}
              className="card-img-top bot-specs"
              alt="bot image"
            />
            <div className="card-body bot-specs">
              <h5 className="card-title">
                {name}  
                <span>
                    <i
                    className="fa-solid fa-copyright fa-beat-fade"
                    style={{ color: "#ff006f" }}
                  ></i>  
                    {bot_class}
                </span>
              </h5>
              <p className="card-text">{catchphrase}</p>
            </div>
            <div className="card-body d-flex justify-content-between">
              <a href="#" className="btn btn-success">
                Enlist
              </a>
              <a href="#" className="btn btn-info">
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
