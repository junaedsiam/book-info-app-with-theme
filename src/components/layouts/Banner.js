import React,{useContext} from 'react'
import logo from './../../image/logo.png'
import { ThemeContext } from "../../contexts/ThemeContext";
import bannerBg from './../../image/banner-bg.jpg'

function Banner() {
    const {theme,switchTheme} = useContext(ThemeContext)
    const bannerCssClass =  "app-banner "+theme.banner + " " + theme.text
    const customStyle={
        borderBottom:theme.name==='light'?'1px solid #eaeaea':'1px solid #222',
        background: ` url(${bannerBg}) center / cover no-repeat`
    }
    console.log(bannerBg)
    return (
        <div className={bannerCssClass} style={customStyle}>
            <div className="container text-center">
                <img src={logo} alt="" width="100"/>
                <h1 className="display-4">Book Info Application</h1>
                <p className="lead ">Manage books information for future use! <br/>Disclaimer:This application uses client browser local-storage. It has no dedicated backend.</p>
                <button className="btn btn-warning" onClick={switchTheme}>Switch to {theme.btnTxt} Theme</button>
            </div>
        </div>
    )
}

export default Banner
