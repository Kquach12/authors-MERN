import React, { useState } from 'react'
import axios from 'axios';

const AuthorForm = (props) => {

    const {initialFirstName, initialLastName, onSubmitProp} = props

    const [firstName, setFirstName] = useState(initialFirstName); 
    const [lastName, setLastName] = useState(initialLastName);

    const onSubmitHandler = e => {

        e.preventDefault();

        onSubmitProp({firstName, lastName})
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" value={firstName} onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" value={lastName} onChange = {(e)=>setLastName(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default AuthorForm;