import React, { useState } from 'react'


const Textbar = (props) => {

    function Upfun() {
        let val = text.toUpperCase();
        Settext(val);


    }
    function Downfun() {
        let val = text.toLowerCase();
        Settext(val);


    }
 
    function Clearfun() {
        
        Settext(" ");


    }
    function changefun(event) {
        Settext(event.target.value);


    }
    const [text, Settext] = useState("")

    return (
        <>

            <div className='container'style={{color:props.mode==="dark"?"white":"black"}}>
                <h2>{props.name}</h2>
                <div className="mb-3 my-3">

                    <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==="dark"?"gray":"white",color:props.mode==="dark"?"white":"black"}} onChange={changefun} value={text} rows="8"></textarea>
                </div>
                <button onClick={Upfun} className="btn btn-primary ">
                    For Uppercase
                </button>
                <button onClick={Downfun} className="btn btn-primary mx-3">
                    For Lowercase
                </button>
                <button onClick={Clearfun} className="btn btn-primary mx-3 ">
                        CLEAR
                </button>
            </div>
            <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>

                <h2 className='my-3'>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            

            </div>
        </>
    )
}

export default Textbar