import React from "react";
import './Navpalet.css';
const furniture = require("./image/fashion.webp");
const home = require("./image/Home.webp");
const Beauty = require("./image/beauty.webp");
const Large = require("./image/Large.webp");
const mobile = require("./image/mobile.webp");
const fashion = require("./image/fashion.webp");
const smart = require("./image/smart.webp");


function Navpalet() {

    return (
        <>
            <div className="d-flex">
                <div className="itemset">
                    <img src={mobile} className="imageset" />
                    <p className="setsize">Mobile</p>
                </div>
                <div className="itemset">
                    <img src={fashion} className="imageset" />
                    <p className="setsize">Fashion</p>
                </div>
                <div className="itemset">
                    <img src={smart} className="imageset" />
                    <p className="setsize">Electronic</p>
                </div>
                <div className="itemset">
                    <img src={Beauty} className="imageset" />
                    <p className="setsize">Beauty</p>
                </div>
                <div className="itemset">
                    <img src={home} className="imageset" />
                    <p className="setsize">Home</p>
                </div>
                <div className="itemset">
                    <img src={Large} className="imageset" />
                    <p className="setsize">Large</p>
                </div>
                <div className="itemset">
                    <img src={furniture} className="imageset" />
                    <p className="setsize">Furniture</p>
                </div>
                <div className="itemset">
                    <img src={furniture} className="imageset" />
                    <p className="setsize">Travel</p>
                </div>

            </div>
        </>
    );


}

export default Navpalet;