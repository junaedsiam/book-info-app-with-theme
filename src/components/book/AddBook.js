import React,{useState,useContext} from 'react'
import PageTitle from '../layouts/PageTitle'
import {BookContext} from '../../contexts/BookContext'
import validate from "../../helpers/validation";


function AddBook() {
    const {dispatch} = useContext(BookContext)
    const [book,setBook] = useState({
        name:'',
        description:'',
        author:'',
        genre:'',
        price:''
    })
    const [errors,setErrors] = useState([])

    const handleChange = (e)=>{
        setBook({
            ...book,
            [e.target.name]:e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const {name,description,author,genre,price} = book 

        const validateResults = {
            name:validate('Book Name', name,'required|min:2|max:150|string'),
            description:validate('Description',description,'min:5|max:300|string'),
            author:validate('Author Name',author,'min:5|max:150|string'),
            genre:validate('Genre',genre,'min:5|max:100|string'),
            price:validate('price',price,'min:1|max:10|number')
            
        }
        console.log(validateResults)

    }



    return (
        <React.Fragment>
            <PageTitle  title={'Add Book'}/>
            <div className="card">
                <div className="card-header">
                    <h4 className="font-weight-light">Fill up the form with proper informations</h4>
                </div>
                <div className="card-body">
                    <p className="text-danger font-italic">All required fields have a red star in their label. Without those data, form will not be submitted for further processing. This form only supports English and bengali alphabets</p>
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Book Name: <span className="text-danger">*</span> </label>
                            <input 
                            type="text" 
                            name="name" 
                            className="form-control"
                            value={book.name}
                            onChange={handleChange}
                            placeholder="Enter Book Name"
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description: </label>
                            <textarea 
                            name="description" 
                            className="form-control"
                            value={book.description}
                            onChange={handleChange}
                            placeholder="Enter proper description within 50 words"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">Author: <span className="text-danger">*</span> </label>
                            <input
                                type="text"
                                name="author"
                                className="form-control"
                                value={book.author}
                                onChange={handleChange}
                                placeholder="Enter Author Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="genre">Genre: <span className="text-danger">*</span> </label>
                            <select
                                name="genre"
                                className="form-control"
                                value={book.genre}
                                onChange={handleChange}
                                placeholder="Which genre?"
                                required
                            >
                                <option value="" disabled>--Choose a Genre--</option>
                                <option value="Novel">Novel</option>
                                <option value="Biography">Biography</option>
                                <option value="Poem">Poem</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price: </label>
                            <input
                                type="text"
                                name="price"
                                className="form-control"
                                value={book.price}
                                onChange={handleChange}
                                placeholder="Enter price if possible"
                            />
                        </div>
                        <div className="form-group"><button className="btn btn-dark">Submit</button></div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AddBook
