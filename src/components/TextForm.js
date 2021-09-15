import React, { useState } from 'react'

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
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5" placeholder="Enter something"></textarea>
    </div>
        <button className="btn btn-success mx-1" onClick={handleUpClick} >Convert to upper case</button>
        <button className="btn btn-success mx-1" onClick={handleLoClick} >Convert to lower case</button>
    <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{words} words and {chars} characters</p>
        <p>{0.008 * chars} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
    )
}

