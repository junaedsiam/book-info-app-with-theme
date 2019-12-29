import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { ThemeContext } from "../../contexts/ThemeContext";

function Book(props) {
    const {id,name,author,genre,price,description} = props.book
    const {deleteClick} = props
    const {theme} = useContext(ThemeContext)
    const cardCssClass = "card mb-3 "+theme.containerBg+" "+theme.text
    return (
        <div className={cardCssClass}>
            <div className="card-header">
                <div className="clearfix">
                    <h4 className="font-weight-light float-left m-0">{name}</h4>
                    <div className="float-right">
                        <Link to ={"/book/edit/"+id} className="btn btn-sm btn-primary mr-2">Edit</Link>
                        <button className="btn btn-sm btn-warning" onClick={deleteClick}>Delete</button>
                    </div>
                </div>
                
            </div>
            <div className="card-body">
                <p className="lead">{description?description:'No description is provided yet'}</p>
                <p className="m-0">Author: {author}</p>
                <p className="m-0">Genre: {genre}</p>
                <p className="m-0 font-weight-bold">Price: {price?'$'+price:'Not added'}</p>
            </div>
           
        </div>
    )
}

export default Book
