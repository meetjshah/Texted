import React, {useState} from 'react'
//import Alert from './Alert';

//let noVal = 0;
export default function TextForm(props) {
    
    const [text, setText] /*array destructuring*/ = useState('');
    

    const handleUpClick = ()=> {
        // console.log("Upper Case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.alert("Converted to UpperCase","success");
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
        props.alert("Converted to CapitalCase","success");
    }
    const handleCopyTextClick = ()=> {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.alert("Text Copied","success");
    }
    const handleInvertClick = ()=> {
        if(text.length>0){
            let i = 0;
            let newText
            if(text.charAt(i) >= 'A' && text.charAt(i) <= 'Z'){
                newText = text.charAt(i).toLowerCase();
            }
            else if(text.charAt(i) >= 'a' && text.charAt(i) <= 'z'){
                newText = text.charAt(i).toUpperCase();
            }
            i++;
            while( i < text.length){
                if(text.charAt(i) >= 'A' && text.charAt(i) <= 'Z'){
                    newText += text.charAt(i).toLowerCase();      
                }
                else
                    newText += text.charAt(i).toUpperCase(); 
                i++;    
            }
          
            setText(newText);
        }
        props.alert("Converted to Inverted Text","success");
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.alert("Converted to LowerCase","success");
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
                <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? '#13466e' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}} placeholder ="Enter Text Here" id="myBox" rows="3"></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-outline-${props.mode === 'light'?'primary':'light'} my-1`} onClick = {handleUpClick}>Uppercase</button>
            <button disabled={text.length===0} className={`btn btn-outline-${props.mode === 'light'?'primary':'light'} mx-2 my-1`} onClick = {handleLoClick}>Lowercase</button>
            <button disabled={text.length===0} className={`btn btn-outline-${props.mode === 'light'?'primary':'light'} mx-2 my-1`} onClick = {handleCCClick}>Capitalized Case</button>
            <button disabled={text.length===0} className={`btn btn-outline-${props.mode === 'light'?'primary':'light'} mx-2 my-1`} onClick = {handleInvertClick}>Inverted Text</button>
            <button disabled={text.length===0} className={`btn btn-outline-${props.mode === 'light'?'primary':'light'} mx-2 my-1`} onClick = {handleCopyTextClick}>Copy Text</button>
        </div>
        <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
            <div className="my-3">
                <h2>Text Summary</h2>
            </div>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            {/* <h3>Time required to read</h3> */}
            <p>{(0.008*text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes of read</p>
            <h3>Preview</h3>
            <p>{text.length>0 ? text:"Nothing to preview"}</p>
        </div>
        </>
    )
}

