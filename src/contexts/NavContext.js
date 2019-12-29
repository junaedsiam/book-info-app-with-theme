import React,{useState, useEffect} from 'react'


export const NavContext = React.createContext()

function NavContextProvider(props) {
    const [navs,setNavs] = useState([
        { id: 1, name: 'Book Lists', route: '/' ,active:false},
        { id: 2, name: 'Add Book', route: '/book/add', active: false},
        { id: 3, name: 'About this application', route: '/about' ,active:false},
        { id: 4, name: 'Contact Me', route: '/contact-me' ,active:false}
    ])

    useEffect(()=>{
        console.log()
        setNavs((prevNavs)=>{
            return prevNavs.map(nav => { 
                nav.active = (nav.route === window.location.hash.slice(1))?true:false 
                return nav
            })
        })
    },[])


    const setActiveNavs = (id=1)=>{
        setNavs((prevNavs)=>{
           return prevNavs.map((nav)=>{
               nav.active = (nav.id===id)?true:false
               return nav 
           })
        })
    }

    return (
       <NavContext.Provider value={{navs,setActiveNavs}}>
           {props.children}
       </NavContext.Provider>
    )
}

export default NavContextProvider
