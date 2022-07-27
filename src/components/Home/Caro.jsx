import React from "react";
import './Caro.css';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from 'mdb-react-ui-kit';
import Items from "./Items";


const ele1=require('./image/ele1.png');
const ele2=require('./image/ele2.png');
const ele3=require('./image/ele3.png');
const ele4=require('./image/ele4.png');
const ele5=require('./image/ele5.png');

function Caro() {
    return (
        <>
            <div className="coroson">
                <MDBCarousel>
                    <MDBCarouselInner>
                        <MDBCarouselItem className='active'>
                            <MDBCarouselElement src={ele1} alt='...'  className="image"/>
                        </MDBCarouselItem>
                        <MDBCarouselItem>
                            <MDBCarouselElement src={ele2} alt='...'  className="image" />
                        </MDBCarouselItem>
                        <MDBCarouselItem>
                            <MDBCarouselElement src={ele3} alt='...'   className="image"/>
                        </MDBCarouselItem>
                        <MDBCarouselItem>
                            <MDBCarouselElement src={ele4} alt='...'   className="image"/>
                        </MDBCarouselItem>
                        <MDBCarouselItem>
                            <MDBCarouselElement src={ele5} alt='...'   className="image"/>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </div>
        </>
    );

}

export default Caro;