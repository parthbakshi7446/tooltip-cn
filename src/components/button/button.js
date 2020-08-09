import React, { useState } from 'react';

import './button.css';

const Button = ( props ) => {
    const [show, setShow] = useState(false);
    function toggleEnter(){
        setShow(true);
    }
    function toggleLeave(){
        setShow(false);
    }

    let stylebox = {};
    if(props.direction === "left"){
        stylebox={
            left:"-80%",
            top:"30%"
        }
    }
    else if(props.direction === "top"){
        stylebox={
            left:"10%",
            top:"-60%"
        }
    }
    else if(props.direction === "right"){
        stylebox={
            left:"110%",
            top:"30%"
        }
    }
    else if(props.direction === "bottom"){
        stylebox={
            left:"10%",
            top:"110%"
        }
    }
    else{
        console.log("none");
        stylebox={
            display:"none"
        }
    }

    return (
        <div className="abc" >
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