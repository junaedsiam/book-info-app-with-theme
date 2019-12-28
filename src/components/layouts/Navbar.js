import React, { useState,useEffect } from 'react'
import logo from '../../image/logo.png'
import NavMenu from './NavMenu'


function Navbar(props) {
    /**State starts */
    const [menus] = useState([
        { id: 1, name: 'Book Lists', route: '/' },
        { id: 2, name: 'Add Book', route: '/book/add' },
        { id: 3, name: 'About this application', route: '/about-this-application' }
    ])
    const [activeMenu, setActiveMenu] = useState(1)
    /**State Ends */

    const handleMenuClick = (id)=>{
       setActiveMenu(id)
    }

    useEffect(()=>{
        const [activeMenu] = menus.filter(menu=>menu.route===window.location.pathname)
        setActiveMenu(activeMenu.id)
    },[menus])

    return (
        <nav className="navbar navbar-light bg-light">
            <ul className="navbar-nav flex-column">
                <li className="nav-item">
                    <span className="navbar-brand" href="#!">
                        <img src={logo} width="35" height="35" className="d-inline-block align-top mr-1" alt="" />
                        Book Info App
                    </span>
                </li>

                {menus.map(menu =>
                    <NavMenu key={menu.id}
                        menu={menu}
                        active={menu.id === activeMenu ? true : false}
                        clicked={()=>handleMenuClick(menu.id)}
                    />)}

                <li className="nav-item  pt-2">
                    <button className="btn btn-dark btn-sm">Switch theme</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
