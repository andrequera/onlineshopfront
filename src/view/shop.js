import React, { useContext, useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import { Context } from "../store/appContext"

const Shop = () => {
const { store, actions } = useContext(Context)
return (<>
        <div className="container">
            <div className="row  py-4">

                
                        <form className="d-flex" onSubmit={e => actions.enviarFormulario(e)}>
                        {/* onsubmit captura los campos con el enter y los envia al back */}
                            <input className="form-control me-2" name="buscador" type="search" placeholder="Search" aria-label="Search" onChange={(e) => actions.capturaCampos(e)}></input>
                            
                            <button className="btn btn-outline-success" type="submit"><img src={"../img/lupadebuscar" + ".PNG"} width="30" height="30" className="rounded img-fluid" alt="...imagen..."></img></button>
                        </form>
                   
            </div>

            <div className="row">

                {/* Mostrando los productos, traidos desde el componente */}

                <ProductCard />

            </div>

        </div>

    </>);
}
export default Shop;