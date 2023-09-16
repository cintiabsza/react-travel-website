import React, {useState, useEffect} from "react"
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './Navbar.css'

//Link replace <a> using React Router

function Navbar(){
    
    const [click, setClick] = useState(true);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(true);

    //I've changed the the original to set useState as true and closeMobileMenu = () => setClick(true);
    //const [click, setClick] = useState(false) - means click (initial value) was equal to "fas fa-bars" and "nav-menu";
    //const closeMobileMenu = () => setClick(false);

    //<div className='menu-icon' onClick={handleClick}> 
    //<i className={click ? 'fas fa-times': 'fas fa-bars' } />
    //</div>
    //<ul className={click ? 'nav-menu-active' : 'nav-menu' }>
 
    //setClick sets a new value for the first array element. If setClick(!click), the setClick(false) means that we came back to the original value (click). 

    //the nav menu and mobile menu are configured by the navbar's css. That's where the screen resizing rule exists to make one or the other appear.

    //handleClick brings setClick, wich menans opposite of "click". For example, will show the mobile menu and the x icon. If I click again, will show the hamburger icon and the nav meu.
    
    //showButton makes the button appear and disappear according to the screen dimension. This button doesn't have configuration on navbar's css file and, therefore, is not treated by the navbar css screen sizing rule. It receives configurations from the Button component. Therefore, there is a specific function for it (showButton) here.



    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton)

    return(
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}> 
                    TRVL
                    <i class='fab fa-typo3' />
                    </Link>
                <div className='menu-icon' onClick={handleClick}> 
                <i className={click ? 'fas fa-bars': 'fas fa-times' } />
                </div>

                <ul className={click ? 'nav-menu' : 'nav-menu active' }>
                    <li className='nav-item'>
                    <Link 
                        to='/' 
                        className='nav-links' onClick={closeMobileMenu}>Home
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link 
                        to='/services'
                        className='nav-links'
                        onClick={closeMobileMenu}>Services
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link
                        to='/products'
                        className='nav-links'
                        onClick={closeMobileMenu}>
                        Products
                    </Link>
                    </li>
                    <li>
                    <Link
                        to='/sign-up'
                        className='nav-links-mobile'
                        onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                    </li>
                    
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
    ) 
}

export default Navbar


