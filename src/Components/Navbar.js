import { Link, NavLink } from "react-router-dom";

function Navbar (){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid d-flex justify-content-between">
                <a
                className="navbar-brand"
                href="#"
                >Droid Empire <i className="fa-brands fa-bots"></i
                ></a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/army">Your Army</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <Link
                        className="nav-link dropdown-toggle"
                        to="/about-us"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        About Us
                    </Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/mission">Mission</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/vision">Vision</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/contact">Contact Us</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Blog</a>
                    </li>
                </ul>

                <form className="d-flex" role="search">
                    <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                </form>

                <button className="btn login">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                    >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                    </svg> 
                     Login
                </button>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;