import React from "react";
import './it.css';



export default function Items(props) {
    return (
        <>
            <div >
                <div className="divforitem">
                    <div >
                        <img src={props.image} className="itemimage" />
                    </div>
                    <div>
                        <p className="size">
                           {props.title}
                        </p>
                        <p className="size">
                            {props.discount}
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}