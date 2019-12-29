import React, { useContext } from 'react'
import logo from './../../image/logo.png'
import NavMenu from './NavMenu'
import { NavContext } from '../../contexts/NavContext'
import { ThemeContext } from '../../contexts/ThemeContext'

function Navbar(props) {

    const {navs,setActiveNavs} = useContext(NavContext)
    const {theme} = useContext(ThemeContext)
    const handleMenuClick = (id)=>{
       setActiveNavs(id)
    }
    const navCssClass = "navbar "+theme.navbarClass+" "+theme.containerBg
    return (
        <nav className={navCssClass}>
            <ul className="navbar-nav flex-column">
                <li className="nav-item">
                    <span className="navbar-brand">
                        <img src={logo} width="50"  className="d-inline-block align-top mr-1" alt="" />
                    </span>
                </li>

                {navs.map(nav =>
                    <NavMenu key={nav.id}
                        menu={nav}
                        active={nav.active? true : false}
                        clicked={()=>handleMenuClick(nav.id)}
                    />)}
            </ul>
        </nav>
    )
}

export default Navbar
