import React from "react";
import Navbar from "../Navbar";
import Navpalet from "./Navpalet";
import Caro from './Caro';
import Caro2 from './Caro2';
import Footer from "../Footer";
import Items from "./Items";
const furniture = require("./image/fashion.webp");
const home = require("./image/Home.webp");
const Beauty = require("./image/beauty.webp");
const Large = require("./image/Large.webp");
const mobile = require("./image/mobile.webp");
const fashion = require("./image/fashion.webp");
const smart = require("./image/smart.webp");
const ab1 = require('./image/AD1.webp');
const item1 = require('./image/item1.webp');
const item2 = require('./image/item2.webp');
const item3 = require('./image/item3.webp');
const item4 = require('./image/item4.webp');
const Bank = require('./image/Bank.png');


function Home() {
    const style={
        width:"100%",
        height:"5%",
        margin: "1%"
    };
    return (
        <>
            <Navbar />
            <Navpalet />
            <Caro />
            <img src={Bank} style={style}/>
            <div className="d-flex">
                <img src={ab1} class="corosize" />

                <div>
                    <div className="d-flex">
                        <Items image={item2} title="use polo" discount="40-50%" />
                        <Items image={item2} title="use polo" discount="40-50%" />
                        <Items image={item2} title="use polo" discount="40-50%" />
                        <Items image={item2} title="use polo" discount="40-50%" />
                        <Items image={item2} title="use polo" discount="40-50%" />
                    </div>

                    <div className="d-flex">
                        <Items image={item2} title="use polo" discount="40-50%" />
                        <Items image={item2} title="use polo" discount="40-50%" />
                        <Items image={item2} title="use polo" discount="40-50%" />
                        <Items image={item2} title="use polo" discount="40-50%" />
                        <Items image={item2} title="use polo" discount="40-50%" />
                    </div>

                </div>

                <img src={ab1} class="corosize" />

            </div>


            <Footer />

        </>
    );
}

export default Home;