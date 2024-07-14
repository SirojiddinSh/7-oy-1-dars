import "./Nav.css";

const Nav = () => {
    return (
        <div className="nav">
            <h2 className="nav__title">E-commerce</h2>
            <form>
                <input type="text" placeholder="input search text" />
                <button>Search</button>
            </form>

            <select>
                <option value="uz">UZBEK</option>
                <option value="ru">RUSSIAN</option>
                <option value="en">ENGLISH</option>
                <option value="es">ESPANIOL</option>
            </select>
        </div>
    );
};

export default Nav;
