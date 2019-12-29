import React from 'react'
import { Link } from 'react-router-dom'


function NavMenu(props) {
    const {menu,active,clicked} = props
    return (
        <li className={active?"nav-item active":'nav-item'}>
            <Link to={menu.route} className="nav-link lead" onClick={clicked}>{menu.name}</Link>
        </li>
    )
}

export default NavMenu
