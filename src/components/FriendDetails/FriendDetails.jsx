import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <p>Friend Details of: {friend.name}</p>
            <p>Call him/her: {friend.phone}</p>
            <p> Email: {friend.email}</p>
        </div>
    );
};

export default FriendDetails;