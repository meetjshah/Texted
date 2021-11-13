//import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({  // JavaScript Object
    //     color : 'black',
    //     backgroundColor : 'white',
    //     border : '1px solid white'
        
    // })

    // const [modebtn, setModeBtn] = useState("Enable Dark Mode")
    // const [btncolor, setbtnColor] = useState("btn btn-dark")
    // const changeMode = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor : 'black',
    //             border : '1px solid black'
    //         })   
    //         setModeBtn("Enable Light Mode");
    //         setbtnColor("btn btn-light");
    //     }
        
    //     else{
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor : 'white',
    //             border : '1px solid white'
    //         })
    //         setModeBtn("Enable Dark Mode");
    //         setbtnColor("btn btn-dark");
    //     }
    // }
    


    return (
        
        <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}} >
            <h1 className="my-3"> About</h1>
            <div className="accordion ml-3" id="accordionExample" style={{color:props.mode === 'dark' ? 'white' : 'black'}} >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Developer
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor:props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}}>
                        <strong>Meet Jatin Shah</strong> 
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={{backgroundColor:props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Texted
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor:props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}}>
                        <strong>TextEd is a word counter and character counting utility with light/dark modes which converts the user entered text into desired output.</strong>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed"  style={{backgroundColor:props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Education 
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor:props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}}>
                        <strong>MS in Computer Science</strong>
                    </div>
                    </div>
                </div>
                
            </div>

            {/* <div className="container my-3">
               <button className = {btncolor} onClick={changeMode}>{modebtn}</button>     
            </div> */}
        </div>
    )
}
