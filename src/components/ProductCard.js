import React, { useContext, useEffect } from 'react';
import { Context } from "../store/appContext"

const ProductCard = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.getProduct()
    }, [])
    return (<>
        {
            store.products !== null ?
                (
                    store.products.map((product, i) => {
                        return (
                            <div className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top imagenpro" src={product.url_image} alt="...imagen..."></img>

                                    <div className="card-body px-2 pb-0">
                                        <h5 className="card-title text-center">{product.name}</h5>
                                        <ul>
                                            <li>Precio: {product.price}</li>
                                            <li>Descuento: {product.discount}</li>
                                            <li>Categoría: {product.category}</li>
                                        </ul>

                                    </div>

                                    <div className="text-center">
                                    <input className="text-center" placeholder="#" type ="number" id="quantity" name="quantity" min="1" max="100"></input>
                                    </div>

                                    <div className="card-footer text-center bg-transparent border-0">

                                        <button href="/#" className="btn btn-outline-success">Comprar</button>


                                        </div>


                                    </div>
                                </div>

                                )
                    })
                                )
                                :
                                (
                                <h1> No se encuentran los productos </h1>

                                )
        }

                            </>)
                    }

export default ProductCard;