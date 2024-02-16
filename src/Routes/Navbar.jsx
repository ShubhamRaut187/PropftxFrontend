import React,{useState} from 'react';

import { NavLink,Link,useNavigate } from 'react-router-dom';
// import {HashLink as Link} from 'react-router-hash-link'
import {CodeIcon,HamburgetMenuClose,HamburgetMenuOpen} from './Icon'
import { useSelector,useDispatch } from 'react-redux';
import { handleLogout } from '../Redux/actions';
import './Styles/Navbar.css'
function Navbar(props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    let Status = useSelector((store)=>{
      return store.status;
    })
    let dispatch = useDispatch();
    // let Navigate = useNavigate();
    return (
        <div className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <span>Propftx Movies</span>
                    {/* <i className="fas fa-code"></i> */}
                    <span className="icon">
                    {/* <CodeIcon /> */}
                    </span>
                </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                // exact
                to="/"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="/movies"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Movies
              </Link>
            </li>
            <li className="nav-item">
              {
                Status === 'in' ? <button className='logout_button' onClick={()=>{
                  dispatch(handleLogout(null));

                }}>Logout</button> : <Link
                // exact
                to="/loginsignup"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </Link>
              }
            </li>
            </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
        </div>
        
    );
}

export default Navbar;