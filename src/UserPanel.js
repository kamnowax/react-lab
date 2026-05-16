export default function UserPanel(props) {

    return (
        <div>

            <h2>Witaj {props.username}</h2>

            <button
                type="button"
                onClick={props.onLogout}
            >
                Wyloguj
            </button>

        </div>
    );
}