import React from 'react';

const UserInfosLayout = props => {
    const image = `${props.avatar_url}`;
    return (
        <div>
            <img src={image} />
            <li>Name: <strong>{props.name}</strong></li>
            <li>User: <strong>{props.login}</strong></li>
            <li>Bio: <strong>{props.bio}</strong></li>
            <li>Followers: <strong>{props.followers}</strong> / Followings:<strong> {props.following}</strong></li>
            <li>Public Repositories: <strong>{props.public_repos}</strong></li>
        </div>
    );
}

export default UserInfosLayout;