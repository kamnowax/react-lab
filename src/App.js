import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

    const [email, setEmail] = useState('kamnowax@gmail.com');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
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
        <div>

            <h1>Witaj w systemie do zapisów na zajęcia</h1>

            {!isLoggedIn && (
                <div>

                    <h2>Zaloguj się e-mailem</h2>

                    <input
                        type="text"
                        value={email}
                        onChange={handleChange}
                    />

                    <button
                        type="button"
                        onClick={() => setIsLoggedIn(true)}
                    >
                        Wchodzę
                    </button>

                    {(email.length < 10 || email.length >= 25) &&
                        <div>{message}</div>
                    }

                </div>
            )}

            {isLoggedIn && (
                <div>

                    <h1>Witaj {email}</h1>

                    <a href="#"
                       onClick={() => setIsLoggedIn(false)}
                    >
                        Wyloguj
                    </a>

                </div>
            )}

        </div>
    );
}

export default App;
