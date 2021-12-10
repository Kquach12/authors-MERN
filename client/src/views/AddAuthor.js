import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import { Link } from '@reach/router';


const AddAuthor = (props) => {
    const [errors, setErrors] = useState([]);

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res =>{
                navigate("/")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
    }
    return (
        <div>
            <h1>Add an Author</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <AuthorForm
                onSubmitProp={createAuthor}
                initialFirstName={""}
                initialLastName={""}
            />
            <Link to={"/"}>Return</Link>
        </div>
    )
}
export default AddAuthor;
