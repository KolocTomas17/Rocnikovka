import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Registrace</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Celé jméno</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Jan Novák" />
            <label htmlFor="email">E-mail</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="vasemail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Heslo</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button className="btn" type="submit">Zaregistrovat se</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Máte zde již účet? Přihlašte se zde.</button>
    </div>
    )
}