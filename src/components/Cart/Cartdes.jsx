import React from "react";
import './Cartdes.css';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import Cart from './Cart'
import Navbar from '../Navbar';

function Cartdes() {
    return (
        <>
        <Navbar/>
            <div className="mb-5">
                <header>
                    <div className="d-inline-flex linemar">
                        <BsFillArrowLeftCircleFill className="arro1" />
                        <p className="arro">Continuos shopping</p>
                    </div>
                    <div className="cardflot d-inline-flex ">
                        <BiCart className="cardflot" size={40} />
                        <p className="cardflot">4</p>
                    </div>
                    <hr className="heroline" />
                </header>
                <section >
                    <div className="itemlist">
                        <h4 className="itemname"> Shopping Cart</h4>
                        <p className="itemcolor">You have --- item in list</p>
                    </div>

                    <div className="card">
                        <div >
                            <Cart />
                            <hr />
                            <Cart />
                            <hr />
                            <Cart />
                            <hr />
                            <Cart />
                            <hr />
                            <Cart />
                            <hr />
                            <Cart />
                            <hr />
                            <Cart />

                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}

export default Cartdes;