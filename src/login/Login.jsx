import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Přihlášení</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email@gmail.com" id="email" name="email" />
                <label htmlFor="password">Heslo</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <br/>
                    <ul> 
                        <CustomLink to="/" className="button">Přihlásit se</CustomLink>
                    </ul>               
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Nemáte zde ještě účet? Zaregistrujte se zde.</button>
        </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }

