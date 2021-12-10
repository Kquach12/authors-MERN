import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';


const Error = (props) => {
    return (
        <div>
            <p>Sorry, the author you are looking for does not exist</p>
            <Link to="/">Home</Link>
        </div>
    )
}
export default Error;
