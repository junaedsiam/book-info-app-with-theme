import React,{useContext} from 'react'
import PageTitle from '../layouts/PageTitle'
import { ThemeContext } from "../../contexts/ThemeContext";

function Contact() {
    const {theme} = useContext(ThemeContext)
    const contactCssClass = "p-3 "+theme.containerBg+" "+theme.text
    return (
        <React.Fragment>
            <PageTitle title={'Contact Me'} />
            <div className={contactCssClass}>
                <p className="lead">You can mail me at my email address, <code>junaedsiam@gmail.com</code>  for any kind of help. Other that that you can also checkout my github profile, <a href="https://github.com/junaedsiam" target="_blank" rel="noopener noreferrer">Junaed Siam</a>. Hope that helps :) 
                </p>

            </div>
        </React.Fragment>
    )
}

export default Contact
