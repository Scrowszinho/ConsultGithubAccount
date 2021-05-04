import React, { useState } from 'react';
import './SearchTop.css';
import UserInfos from '../userInfos/UserInfos';
const SearchTop = (props) => {
    const [user, setUser] = useState('');
    return (
        <div>
        <div className='SearchTop'>
            <input type="text" className="inputUser"
                placeholder='Digite o seu usuário' value={user}
                onChange={t => setUser(t.target.value)}
            />
            </div>
            <UserInfos user={user}/>
        </div>
    );
}

export default SearchTop;