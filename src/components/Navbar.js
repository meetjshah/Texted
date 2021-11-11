import React, {useEffect} from 'react' //rpce
import PropTypes from 'prop-types' //impt
import { Link, useLocation } from 'react-router-dom'


const Navbar = (props) => {
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
            <img src="logo.png" alt="" width="30" height="30" className="d-inline-block align-text-top mx-2"/>
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className={`nav-link ${location.pathname=== "/"? "active" : ""}`} aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${location.pathname=== "/about"? "active" : ""}`} to="/about">{props.aboutText}</Link>
                    </li>
                    <div className={` form-check form-switch text-${props.mode === 'light'?'dark':'light'} mt-2 mx-3`} > {/* {` template literal `} and ? is ternary operator */}
                    <input className="form-check-input float-left" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label float-left" htmlFor="flexSwitchCheckDefault">{props.modetext}</label>
                    
                </div>
                   
                
                </ul>
               
                
                
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className={`btn btn-outline-${props.mode === 'light'?'dark':'light'} type="submit`}>Search</button>
                </form>
                <form className="d-flex mx-2">
                    <Link className={`btn btn-outline-${props.mode === 'light'?'dark':'light'} btn-sm mx-1`} to="/login" role="button">Login</Link>
                    <Link className={`btn btn-outline-${props.mode === 'light'?'dark':'light'} btn-sm`} to="/signup" role="button">Signup</Link>
                </form> */}
                
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired, 
    aboutText : PropTypes.string.isRequired // isRequired to not forget entering value in App.js <Navbar title = " " />
}

Navbar.defaultProps = {
    title : 'Set title here',  // set default value if no entry in App.js with Navbar
    aboutText : 'About text here'
}

export default Navbar
