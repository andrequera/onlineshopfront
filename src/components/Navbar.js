import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#"><img src={"../img/carrito" + ".JPG"} width="50" height="65" className="img-fluid" alt="...imagen..."></img><strong>Online Shop</strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/shop">Shop <span className="sr-only"></span></Link>
                    </li>
                    
                </ul>
            </div>
        </nav>

    );

}

export default Navbar;