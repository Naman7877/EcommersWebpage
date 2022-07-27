import React from "react";
import './Cart.css'
import { GrFormSubtract } from "react-icons/gr";
import { GrFormAdd } from "react-icons/gr";

function Cart(props) {
    return (
        <>
            <div className="genecart">
                <img className="setimage" src="https://rukminim1.flixcart.com/image/800/960/kz7bcsw0/jean/7/h/9/38-pjdnpskfr61279-peter-england-original-imagb9hsqj5frrqr.jpeg?q=50" />
                
                <div className="second1">
                    <p className="itemname">samsang galaxy</p>
                    <p className="itemcolor">Black in color</p>
                </div>

                <div className="second">
                    <GrFormSubtract/>
                    <div className="boxofitem"> </div>
                    <GrFormAdd/>
                </div>

                <div className="second2">
                    <p>2000 $</p>
                </div>
            </div>
        </>
    );
}

export default Cart;