import React, { useState } from 'react';
import './App.css';
import 'jquery'; import '@popperjs/core'; import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shop from './view/shop';
import injectContext from "./store/appContext"
import BannerGeneral from './components/BannerGeneral';
function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <BannerGeneral/>

        <Switch>

        <Route exact path="/" component={Shop} />
          <Route exact path="/shop" component={Shop} />
          


        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
