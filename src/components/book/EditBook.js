import React,{useState,useContext,useEffect} from 'react'
import PageTitle from '../layouts/PageTitle'
import {BookContext} from '../../contexts/BookContext'
import { NavContext } from '../../contexts/NavContext'
import { ThemeContext } from '../../contexts/ThemeContext'
import validate from "../../helpers/validation";
import {EDIT_BOOK} from '../../reducers/bookReducer'
import { Redirect } from 'react-router-dom'

function EditBook(props) {
    const {books,dispatch} = useContext(BookContext)
    const { setActiveNavs } = useContext(NavContext)
    const { theme } = useContext(ThemeContext)
    const [formSubmit,setFormSubmit] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [book,setBook] = useState({
        id:'',
        name:'',
        description:'',
        author:'',
        genre:'',
        price:''
    })
    useEffect(()=>{
        const [incomingBook] = books.filter(book => book.id === props.match.params.id)
        setBook(incomingBook)
    },[books,props])


    const [errors,setErrors] = useState({
        name: {},
        description: {},
        author: {},
        genre: {},
        price: {}
    })

    const handleChange = (e)=>{
        setBook({
            ...book,
            [e.target.name]:e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const {name,description,author,genre,price} = book 
        const validateFields = {
            name:validate('Book Name', name,'required|min:2|max:150|string'),
            description:validate('Description',description,'min:5|max:300|string'),
            author:validate('Author Name',author,'min:2|max:150|string|required'),
            genre:validate('Genre',genre,'min:5|max:100|string|required'),
            price:validate('price',price,'min:1|max:10|number')
            
        }
        setErrors({ ...validateFields})
        setFormSubmit(true)
        setActiveNavs()
        setRedirect(true)
    }

    useEffect(()=>{
        if(formSubmit){
            for(let error in errors){
                if(errors[error].result===false){
                    setFormSubmit(false)
                    return
                }
                
            }
            dispatch({type:EDIT_BOOK,payload:book})
            setFormSubmit(false)
            props.history.push("/")
        }
        
    }, [formSubmit, dispatch, book, errors,props])
   
    const cardCssClass = "card " + theme.text + " " + theme.containerBg
    const nameCssClass = theme.formControl + ((errors.name.result === false) ? " is-invalid" : "")
    const descriptionCssClass = theme.formControl + ((errors.description.result === false) ? " is-invalid" : "")
    const authorCssClass = theme.formControl + ((errors.author.result === false) ? " is-invalid" : "")
    const genreCssClass = theme.formControl + ((errors.genre.result === false) ? " is-invalid" : "")
    const priceCssClass = theme.formControl + ((errors.price.result === false) ? " is-invalid" : "")
    return (
        <React.Fragment>
            {redirect ? <Redirect to="/" /> : null}
            <PageTitle  title={'Edit Book'}/>
            <div className={cardCssClass}>
                <div className="card-header">
                    <h4 className="font-weight-light">Fill up the form with proper informations</h4>
                </div>
                <div className="card-body">
                    <p className="text-info">All required fields have a red star in their label. Without those data, form will not be submitted for further processing. This form only supports English and bengali alphabets</p>
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Book Name: <span className="text-danger font-italic">* {(errors.name.result===false)?errors.name.message:''}</span> </label>
                            <input 
                            type="text" 
                            name="name" 
                            className={nameCssClass}
                            value={book.name}
                            onChange={handleChange}
                            placeholder="Enter Book Name"
                            
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description: <span className="text-danger font-italic"> {(errors.description.result === false) ? errors.description.message : ''}</span></label>
                            <textarea 
                            name="description" 
                            className={descriptionCssClass}
                            value={book.description}
                            onChange={handleChange}
                            placeholder="Enter proper description within 50 words"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">Author: <span className="text-danger font-italic">* {(errors.author.result === false) ? errors.author.message : ''}</span> </label>
                            <input
                                type="text"
                                name="author"
                                className={authorCssClass}
                                value={book.author}
                                onChange={handleChange}
                                placeholder="Enter Author Name"
                                
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="genre">Genre: <span className="text-danger font-italic">* {(errors.genre.result === false) ? errors.genre.message : ''}</span> </label>
                            <select
                                name="genre"
                                className={genreCssClass}
                                value={book.genre}
                                onChange={handleChange}
                                placeholder="Which genre?"
                            >
                                <option value="" disabled>--Choose a Genre--</option>
                                <option value="Novel">Novel</option>
                                <option value="Biography">Biography</option>
                                <option value="Poem">Poem</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price: <span className="text-danger font-italic">{(errors.price.result === false) ? errors.price.message : ''}</span></label>
                            <input
                                type="text"
                                name="price"
                                className={priceCssClass}
                                value={book.price}
                                onChange={handleChange}
                                placeholder="Enter price if possible"
                            />
                        </div>
                        <div className="form-group"><button className="btn btn-primary">Update Book</button></div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EditBook
