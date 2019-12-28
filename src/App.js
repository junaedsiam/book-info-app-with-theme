import React from 'react'
import Navbar from './components/layouts/Navbar'
import Books from './components/book/Books'
import AddBook from './components/book/AddBook'
import About from './components/pages/About'
import Footer from './components/layouts/Footer'
import './App.css'
import BookContextProvider from './contexts/BookContext'
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

function App() {
    
    return (
        <Router>
            <div className="App">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-3">
                            <Navbar />
                        </div>
                        <div className="col-md-9">
                            <Switch>
                                <BookContextProvider>
                                    <Route exact path="/" component={Books} />
                                    <Route exact path="/book/add" component={AddBook} />
                                </BookContextProvider>
                                <Route exact path="/about-this-application" component={About} />
                            </Switch>
                        </div>
                        <div className="col-12">
                            <Footer />
                        </div>
                    </div>

                </div>

            </div>
        </Router>
    )
}

export default App
