import React, {useState, useEffect}from 'react'
export const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const light = {
        name:'light',
        banner:'bg-banner-light',
        text:'text-dark',
        btnTxt:'Dark',
        containerBg:'bg-light',
        navbarClass:'navbar-light',
        formControl:'form-control'
    }
    const dark = {
        name:'dark',
        banner:'bg-banner-dark',
        text:'text-white',
        btnTxt:'Light',
        containerBg: 'bg-dark',
        navbarClass: 'navbar-dark',
        formControl: 'form-control form-control-dark'
    }
    const [isLightTheme,setIsLightTheme] = useState(true)
    const [theme,setTheme] = useState({...light})

    useEffect(()=>{
        document.body.style.background = isLightTheme?'white':'#252525'
    },[isLightTheme])

    const switchTheme = () =>{
        if(isLightTheme){
            setTheme({...dark})
            setIsLightTheme(false)
        }else{
            setTheme({...light})
            setIsLightTheme(true)
        }
    }

    return (
        <ThemeContext.Provider value={{theme,switchTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
