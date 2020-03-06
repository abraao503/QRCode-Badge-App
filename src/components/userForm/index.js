import React, { useState } from 'react';

import './styles.css';


function UserForm({onSubmit}){
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [twitter_username, setTwitter_username] = useState(''); 
    const [github_username, setGithub_username] = useState(''); 

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit({
            name,
            email,
            twitter_username,
            github_username
        });
    }

    return(
        <form className="userForm" onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="name">Name</label>
                <input
                    required 
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="input-block">
                <label>Email</label>
                <input
                    required
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="input-block">
                <label>Twitter</label>
                <input
                    type="text"
                    name="twitter_username"
                    value={twitter_username}
                    onChange={e => setTwitter_username(e.target.value)}
                />
            </div>
            <div className="input-block">
                <label>Github</label>
                <input
                    type="text"
                    name="github_username"
                    value={github_username}
                    onChange={e => setGithub_username(e.target.value)}
                />
            </div>
            <button type="submit">Generate</button>
        </form>
    );
}

export default UserForm;