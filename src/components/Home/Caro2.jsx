import React from "react";
import Items from './Items';
import './Caro2.css';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from 'mdb-react-ui-kit';
const ab1 = require('./image/AD1.webp');
const item1 = require('./image/item1.webp');
const item2 = require('./image/item2.webp');
const item3 = require('./image/item3.webp');
const item4 = require('./image/item4.webp');

function Caro2() {
    return (
        <div className="d-flex">
            <img src={ab1} class="corosize" />
            {/* <div >
                <MDBCarousel>
                    <MDBCarouselInner>
                        <MDBCarouselItem className='active'>
                            {/* <MDBCarouselElement src={} alt='...' className="image" /> */}
            {/* <Items image={item2} title="use polo" discount="40-50%" />
                        </MDBCarouselItem>

                    </MDBCarouselInner>

                    <MDBCarouselInner>
                        <MDBCarouselItem>
                            <Items image={item2} title="use polo" discount="40-50%" />
                        </MDBCarouselItem>
                        
                    </MDBCarouselInner>


                    <MDBCarouselInner>
                        <MDBCarouselItem>
                            <Items image={item3} title="use polo" discount="40-50%" />
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </div> */}
            {/* */}
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
    );
}

export default Caro2;