import React, { useContext } from 'react'
import {ThemeContext} from '../../contexts/ThemeContext'


function PageTitle(props) {
    const {theme} = useContext(ThemeContext)
    const titleCssClass = "font-weight-normal mb-4 "+theme.text
    return (
        <h3 className={titleCssClass}>{props.title}</h3>
    )
}

export default PageTitle
