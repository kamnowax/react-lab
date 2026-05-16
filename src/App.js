import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('kamnowax@gmail.com');

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
            <h2>
                Zaloguj się e-mailem
                <input
                    type="text"
                    value={email}
                    onChange={handleChange}
                />
                <button type="button" onClick={() => alert(email)}>
                    Wchodzę
                </button>
            </h2>
            {(email.length < 10 || email.length >= 25) && <div>{message}</div>}


        </div>

    );
}
export default App;
