import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';


const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data));
    }, [])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId))
    }

    return (
        <div>
            <Link to={"/create"}>Add an Author</Link> 
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, idx)=>{
                        return(
                            <tr>
                                <td>{author.firstName} {author.lastName}</td>
                                
                                <td>
                                    <Link to={"/" + author._id + "/edit"}>Edit</Link> 
                                    |  
                                    <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)} />
                                </td>
                            </tr>
                            
                    )})}
                    
                </tbody>
            </table>
        </div>
    )
}
export default AuthorList;