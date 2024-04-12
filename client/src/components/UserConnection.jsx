import React, { useState } from 'react';

import './UserConnection.css';

function UserConnection() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Données à envoyer au serveur pour vérification
       // console.log(`Username: ${username}, Password: ${password}`);
    }

    return (
        <>
            <h2>{username ? username : 'User Connection'}</h2>
            <h3> WELCOME </h3>
            <div id="card" className="card">
                <form onSubmit={handleSubmit}>
                    <label>
                        <h4>Nom d'utilisateur :</h4>
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                    </label>
                    <label>
                        <h4> Mot de passe :</h4>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <input type="submit" value="Se connecter"/>
                </form>
            </div>

            <div id="card" className="card">
                <h4>Vous n'avez pas de compte ?</h4>

                <a href="/register">Créer un compte</a>
            </div>

            <div id="card" className="card">
                <h2>{username ? username : 'User Connection'} et Vladimir Poutine</h2>
                <p>“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”</p>

            </div>

        </>
    );
}


export default UserConnection;




