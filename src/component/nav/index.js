import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

const Nav = props => (
    <ul className="nav">
        {
            props.list.map((ele, idx) => (
                <Link to={ele.url} key={idx}>
                    <li>{ele.text}</li>
                </Link>
            ))
        }
    </ul>
);

export default Nav;
    
