import React, { useState } from 'react';

import './button.css';

const Button = ( props ) => {
    const [show, setShow] = useState(false);
    function toggleEnter(){
        console.log("oye hoye");
        setShow(true);
    }
    function toggleLeave(){
        console.log("oye hoye");
        setShow(false);
    }
    let stylebox = {};
    if(props.direction === "left"){
        stylebox={
            left:"42%",
            top:"45%"
        }
    }
    else if(props.direction === "top"){
        stylebox={
            left:"45%",
            top:"42%"
        }
    }
    else if(props.direction === "right"){
        stylebox={
            left:"48%",
            top:"45%"
        }
    }
    else if(props.direction === "bottom"){
        stylebox={
            left:"45%",
            top:"48%"
        }
    }

    return (
        <div >
            <button
                onMouseEnter={toggleEnter}
                onMouseLeave={toggleLeave}
            >
                Download
            </button>
            {show?
                <div className="popup" style={stylebox}>
                    Size : 50MB
                </div>
                    :null
            }

            
        </div>
    );
};

export default Button;