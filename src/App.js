import React from 'react'
import Navbar from './components/layouts/Navbar'
import Books from './components/book/Books'
import AddBook from './components/book/AddBook'
import EditBook from './components/book/EditBook'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Footer from './components/layouts/Footer'
import Banner from './components/layouts/Banner'
import './App.css'
import BookContextProvider from './contexts/BookContext'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThemeContextProvider from './contexts/ThemeContext'
import NavContextProvider from './contexts/NavContext'

function App() {

    return (

        <Router>
            <NavContextProvider>
                <ThemeContextProvider>
                    <div className="App">
                        <Banner />
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-lg-3 mb-5 mb-lg-0">
                                    <Navbar />
                                </div>
                                <div className="col-lg-9">
                                    <BookContextProvider>
                                        <Switch>
                                            <Route exact path="/" component={Books} />
                                            <Route exact path="/book/add" component={AddBook} />
                                            <Route exact path="/book/edit/:id" component={EditBook} />
                                        </Switch>
                                    </BookContextProvider>
                                    <Switch>
                                        <Route exact path="/about" component={About} />
                                        <Route exact path="/contact-me" component={Contact} />
                                    </Switch>
                                </div>
                                <div className="col-12">
                                    <Footer />
                                </div>
                            </div>

                        </div>

                    </div>
                </ThemeContextProvider>
            </NavContextProvider>
        </Router>

    )
}

export default App
