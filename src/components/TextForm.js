import React, { useState } from 'react'
import copy from "copy-to-clipboard";  

export default function TextForm(props) {
    const [text, setText] = useState("");
    let handleUpClick=(event)=>{
        // console.log("clicked");
        const newText=text.toUpperCase();
        setText(newText);
    };

    let handleLoClick=(event)=>{
        // console.log("clicked");
        const newText=text.toLowerCase();
        setText(newText);
    };

    let handleOnChange=(event)=>{
        // console.log("changed");
        setText(event.target.value);
    }

    let handleClClick=(event)=>{
        // console.log("changed");
        setText("");
    }
    
    let handleCbClick=(event)=>{
        // console.log("changed");
        copy(text);
        props.showAlert("copied to clipboard","success");
    }

    let handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    let words,chars;
    if(text==="" || text[text.length-1]===" ")
    {
        words=text.split(" ").length-1;
        if(text==="")
            chars=0;
        else
            chars=text.length-1;
    }
    else
    {
        words=text.split(" ").length;
        chars=text.length;
    }
    return (
        <>
    <h1>{props.heading}</h1>
    <div className="my-3">
        <textarea className="form-control" style={{backgroundColor:props.mode==="light"?"white":"rgb(33, 37, 41)",border:"1px solid black",color:props.mode==="light"?"black":"white"}} value={text} onChange={handleOnChange} id="myBox" rows="5" placeholder="Enter something"></textarea>
    </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to upper case</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to lower case</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace} >Remove Extra Space</button>
        <button className="btn btn-danger mx-1" onClick={handleClClick} >Clear Text</button>
        <button className="btn btn-success mx-1" onClick={handleCbClick} >Copy to ClipBoard</button>
    <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{words} words and {chars} characters</p>
        <p>{(0.008 * chars).toPrecision(3)} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length===0?"Enter text to get a preview.🙂":text}</p>
    </div>
    </>
    )
}

