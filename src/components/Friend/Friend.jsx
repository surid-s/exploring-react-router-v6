import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({ friend }) => {
    const { id, name, email, phone, address, username } = friend;
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>,
            Email: {email}<br />
            Phone: {phone} <br />
            Address: {address.city} <br />
            UserName: <Link to={`/friend/${id}`}> {username}</Link>
        </div>
    );
};

export default Friend;