import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data)
                setLoaded(true)
            })
            .catch(err=>{
                navigate("/error")
            })
    }, [])
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => navigate('/'))
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
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <h1>Update an Author</h1>
            {loaded && (
                <AuthorForm
                    onSubmitProp={updateAuthor}
                    initialFirstName={author.firstName}
                    initialLastName={author.lastName}
                />
            )}

            <DeleteButton authorId={id} successCallback={() => navigate("/")} />

        </div>
    )
}
export default Update;

