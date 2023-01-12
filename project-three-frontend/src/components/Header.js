import { Link } from "react-router-dom"

function Header(props) {
    return (
        <nav className="Header">
            <Link to="/">
                <div className="title">Snow Pad</div>
            </Link>
            <a>About </a>
            <a>Products</a>

        </nav>

    )
}

export default Header;