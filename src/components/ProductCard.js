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
                                    <img className="card-img-top" src={product.url_image} alt="...imagen..."></img>

                                        <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <ul>                                            
                                            <li>{product.price}</li>
                                            <li>{product.discount}</li>
                                            <li>{product.category}</li>
                                        </ul>
                                        
                                        <a href="/#" className="btn btn-primary">Comprar</a>
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