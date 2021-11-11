import React, {useState} from 'react'


let noVal = 0;
export default function TextForm(props) {
    
    const [text, setText] /*array destructuring*/ = useState('');
    
    
    if(text.length === 0){
        noVal = 0;
    } 
    else{
        
        if(text.charAt(" ")){
            //console.log(noVal);
            noVal = text.split(" ").length;
        }
         
    }

    const handleUpClick = ()=> {
        // console.log("Upper Case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        //props.alert("Converted to UpperCase","success");
    }

    const handleCCClick = ()=> {
        let i = 0;
        let newText = text.charAt(i).toUpperCase();
        while( i < text.length){
            if(text.charAt(i)===" "){
                newText += text.charAt(i+1).toUpperCase();      
            }
            else
                newText += text.charAt(i+1); 
            i++;    
        }  
        setText(newText);
        //props.alert("Converted to CapitalCase","success");
    }
    const handleCopyTextClick = ()=> {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        //props.alert("Text Copied","success");
    }
    const handleInvertClick = ()=> {
        let i = 1;
        let newText
        if(text.charAt(i-1) >= 'A' && text.charAt(i-1) <= 'Z'){
            newText = text.charAt(i).toLowerCase();
        }
        else if(text.charAt(i-1) >= 'a' && text.charAt(i-1) <= 'z'){
            newText = text.charAt(i).toUpperCase();
        }
        
        while( i < text.length){
            if(text.charAt(i) >= 'A' && text.charAt(i) <= 'Z'){
                newText += text.charAt(i).toLowerCase();      
            }
            else
                newText += text.charAt(i).toUpperCase(); 
            i++;    
        }  
        setText(newText);
        //props.alert("Converted to Inverted Text","success");
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        //props.alert("Converted to LowerCase","success");
    }

    const handleOnChange = (event)=> {
        // console.log("On Change");
        setText(event.target.value);
    }

    return (
        <>
        <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}} /*one curly brace for JavaScript and second for object in JavaScript*/  >
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? '#161414' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}} placeholder ="Enter Text Here" id="myBox" rows="3"></textarea>
            </div>
            <button className={`btn btn-outline-${props.mode === 'light'?'primary':'light'}`} onClick = {handleUpClick}>Uppercase</button>
            <button className={`btn btn-outline-${props.mode === 'light'?'primary':'light'} mx-2`} onClick = {handleLoClick}>Lowercase</button>
            <button className={`btn btn-outline-${props.mode === 'light'?'primary':'light'} mx-2`} onClick = {handleCCClick}>Capitalized Case</button>
            <button className={`btn btn-outline-${props.mode === 'light'?'primary':'light'} mx-2`} onClick = {handleInvertClick}>Inverted Text</button>
            <button className={`btn btn-outline-${props.mode === 'light'?'primary':'light'} mx-2`} onClick = {handleCopyTextClick}>Copy Text</button>
        </div>
        <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
            <div className="my-3">
                <h2>Text Summary</h2>
            </div>
            <p>{noVal} words and {text.length} characters</p>
            <h3>Time required to read</h3>
            <p>{(0.008*text.split(" ").length).toFixed(3)} Minutes</p>
            <h3>Preview</h3>
            <p>{text.length>0 ? text:"Enter something to preview"}</p>
        </div>
        </>
    )
}

