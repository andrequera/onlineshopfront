import React, { useContext, useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import { Context } from "../store/appContext"

const Shop = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.getCategorys()

    }, [])

    return (<>
        <div className="container">
            <div className="row  py-2">

                {/* input del buscador */}
                <form className="d-flex" onSubmit={e => actions.enviarFormulario(e)}>
                    {/* onsubmit captura los campos con el enter y los envia al back */}
                    <input className="form-control me-2" name="buscador" type="search" placeholder="Ingrese nombre del producto a comprar" aria-label="Search" onChange={(e) => actions.capturaCampos(e)}></input>

                    <button className="btn btn-outline-success" type="submit"><img src={"../img/lupadebuscar.png"} width="30" height="30" className="rounded img-fluid" alt="...imagen..."></img></button>
                </form>
            </div>

            {/* boton filtrar por precio */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-end py-2">

                <div class="dropdown">
                    <button class="btn btn-outline-info float-end dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Ordenar por precio
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button class="dropdown-item" onClick={() => actions.ordenProdPre()}>Menor a mayor <img src={"../img/filtro.png"} width="20" height="20" className="rounded img-fluid" alt="...imagen..."></img> </button></li>
                    </ul>
                </div>
            </div>

            {/* boton de categoria */}
            <div class="container">
                <div class="row">

                    <div class="col-2">
                        <div className="row">
                            <div>
                                <div className="dropdown">
                                    <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorias
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                        {
                                            store.categorys !== null ?
                                                (
                                                    store.categorys.map((category, i) => {
                                                        return (

                                                            <li key={i}><a className="dropdown-item" onClick={() => actions.getProdCat(category.id)}>{category.name}</a></li>

                                                        )
                                                    })
                                                )
                                                :
                                                (
                                                    <h1> No se encuentra categoría </h1>
                                                )
                                        }
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* cartas de producto */}
                    <div class="col-10">
                        <div className="row">

                            {/* Mostrando los productos, traidos desde el componente */}
                            <ProductCard />

                        </div>
                    </div>

                </div>
            </div>

        </div>
    </>);
}
export default Shop;