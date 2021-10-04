import React, { useContext, useState, useEffect } from 'react'
import { Context } from "../store/appContext"

const Buy = () => {
    const { store, actions } = useContext(Context)
    return (<>

        <div className="container">
            <div className="row">
                <div class="col-6">
                    <h1 className="resumendecompra">Tu compra</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{store.namebuy}</td>
                                <td>{store.cantidadbuy}</td>
                                <td>{store.pricebuy*store.cantidadbuy}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-6">
                    <img src={"../img/fondobuy.jpg"} className="mx-auto d-block" width="500px" alt="...imagen..."></img>
                </div>
            </div>
        </div>
    </>);
}
export default Buy;