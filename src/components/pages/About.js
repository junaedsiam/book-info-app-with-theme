import React,{useContext} from 'react'
import PageTitle from '../layouts/PageTitle'
import { ThemeContext } from "../../contexts/ThemeContext";

function About() {
    const{theme} = useContext(ThemeContext)
    const jumboCssClass = "jumbotron "+theme.containerBg+" "+theme.text
    return (
        <React.Fragment>
            <PageTitle title={'About this Application'}/>
            <div className={jumboCssClass}>
                <p className="lead">Hello Everyone! My name is, <a href="https://github.com/junaedsiam" target="_blank" rel="noopener noreferrer">Junaed Siam</a>. Hope you are doing well. This <code>Book Info App</code> seems very easy at first glance. But some very important and key features of REACT are implemented in this application. All the books information will be saved into user browser's local-storage. There is no database / backend in this application. </p>
                <p className="lead">Let me go through some of the technical details of this application - </p>
                <h3 className="font-weight-light">-React Framework</h3>
                <p className="lead">This app is a single page application, powered by React. React is a really powerful and solid framework. I had so much fun while working with it. If you did not try it yet, but heard of it somewhere, you can give it a try. I can assure you, you will have fun too :D  </p>
                <h3 className="font-weight-light">-React Hooks</h3>
                <p className="lead">React hooks are new addition of react, that has been included since <code>Version 16.8</code>. It allows developer to use state outside a class component, and gives alternative of various lifecycle methods, and many. This is a very new feature of React. And this application start-to-end is built on React hooks.  </p>

                <h3 className="font-weight-light">-New Context API</h3>
                <p className="lead">Context API is another awesome feature, that is integrated into React core from <code>version 16.3</code>. For handling different states of a single application, Context API is  very useful. </p>
                <h3 className="font-weight-light">-UI Theme Integration</h3>
                <p className="lead">This application has two theme mode. Light and Dark. With react context API, Implementing UI theme, is very straight forward, and ogranized</p>
                <h3 className="font-weight-light">-Validation Library</h3>
                <p className="lead">I wrote a very basic but powerful validation package for this project. Beginners will find this validation package, really helpful, and will have a better understanding of how validation works in javascript, and how you can include your own package into React. But keep in mind, the validation package is really basic.
                </p>
                <p className="lead">Suppose you want to validate a text field. Maximum length will be 100, minimum:2, and also the field is a required field.All you have to do - </p>
                <p ><code>const validateStr = validate('Field Name',fieldVal,'required|min:2|max:100|string')
                    <br/>
                    Will return an object {'{result:true}'} or {'{result:false,message:\'min length must be 2 characters\'}'}
                    </code></p>
                

                <p className="lead">Thats all folks! See you later, on some other project. Until then, have fun! </p>
            </div>
        </React.Fragment>
    )
}

export default About
