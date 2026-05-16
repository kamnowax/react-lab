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
    } else if (email.length < 15) {
        message = <div>Twój adres e-mail jest odpowiedniej dlugości.</div>;
    } else {
        message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}.</h2>
            {message}
            <input type="text" value={email} onChange={handleChange}/>

        </div>
    );
}
export default App;
