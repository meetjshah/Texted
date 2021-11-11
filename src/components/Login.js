import React, {useState} from 'react' //rafce
import { useHistory } from 'react-router-dom'


const Login = (props) => {

    const [credentials, setcredentials] = useState({email: "", password: ""})
    let history = useHistory();

    const handleSubmit = async (e)=> {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method : 'POST',
            // mode: 'no-cors',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({email : credentials.email,password : credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success){
            //Save authtoken and redirect
            localStorage.setItem('token',json.authtoken);
            history.push("/dashboard");
        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=> {
        setcredentials({...credentials, [e.target.name] : e.target.value})
    }
    return (
        <div>
            <form onSubmit={handleSubmit} style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
                <div className="mb-3" >
                    <label htmlFor="email" className="form-label" >Email address</label>
                    <input type="email" className="form-control" id="email" name = "email" onChange={onChange} value ={credentials.email} aria-describedby="emailHelp" style={{backgroundColor:props.mode === 'dark' ? '#161414' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}}/>
                    {/* <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" >Password</label>
                    <input type="password" className="form-control" value ={credentials.password} onChange={onChange} name="password" id="password" style={{backgroundColor:props.mode === 'dark' ? '#161414' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}} />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
