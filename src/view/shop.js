import React, { useContext, useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';

const Shop = () => {
    return (<>
        <div className="container">
            <div className="row  py-4">

                <nav className="center-navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <a className="btn btn-outline-success" type="submit"><img src={"../img/lupadebuscar" + ".PNG"} width="30" height="30" className="rounded img-fluid" alt="...imagen..."></img></a>
                        </form>
                    </div>
                </nav>

            </div>

            <div className="row">

                {/* Mostrando los productos, traidos desde el componente */}

                <ProductCard />

            </div>

        </div>

    </>);
}
export default Shop;