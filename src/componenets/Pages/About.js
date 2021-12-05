import React from 'react'
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>Search Github Users</p>
            <li><Link to="/">Main page</Link></li>
        </div>
    )
}

export default About;