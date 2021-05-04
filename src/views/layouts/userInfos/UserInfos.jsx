import React from 'react';
import './UserInfos.css';
import { useFetch } from '../../../hooks/useFatch';
import UserInfosLayout from './UserInfosLayout';
const UserInfos = props => {
    const user = props.user == '' ? 'Scrowszinho' : props.user;
    const url = `https://api.github.com/users/${user}`;
    const response = useFetch(url);
    console.log(response)
    return (
        <div className='UserInfos'>
            <ul>
                {response.data ? UserInfosLayout(response.data) : false}
            </ul>
        </div>
    );
}

export default UserInfos;