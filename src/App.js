import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import "milligram";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

function App() {

    const [email, setEmail] = useState('kamnowax@gmail.com');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }
    function login(userEmail) {
        setEmail(userEmail);
        setIsLoggedIn(true);
    }

    function logout() {
        setIsLoggedIn(false);
    }

    let message;

    if (email.length < 10) {
        message = <div>Twoj adres jest za krótki!</div>;
    } else if (email.length < 25) {
        message = <div>Twój adres e-mail jest odpowiedniej dlugości.</div>;
    } else {
        message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    }

    return (
        <div className="container">

            <h1>System do zapisów na zajęcia</h1>

            {
                isLoggedIn
                    ? <UserPanel username={email} onLogout={logout} />
                    : <LoginForm onLogin={login} />
            }

        </div>
    );
}

export default App;