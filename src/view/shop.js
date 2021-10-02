import React, { useContext, useState, useEffect } from 'react'
//import { Context } from "../store/appContext"
//import {useHistory} from "react-router-dom"


const Shop = () => {
    return (<>
        <div className="container">
            <div className="row">


                <div>
                    <nav className="center-navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>

                </div>

                <div className="row">


                    <div className="col-3">1

                    <div>

                        
                    </div>
                    
                    
                    </div>
                    <div className="col-3">2</div>
                    <div className="col-3">3</div>
                    <div className="col-3">4</div>

                </div>


            </div>
        </div>
    </>);
}
export default Shop;