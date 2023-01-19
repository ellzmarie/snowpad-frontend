import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="nav">
            <Link to='/'>
                <div>Snow Pad</div>
            </Link>
            <Link to='/create'>
                <div>Create</div>
            </Link>

        </div>
    );
}

export default Header;