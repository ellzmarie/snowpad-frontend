import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <div className="app-title"><img className="stock-kawaii-app-icon" src="https://img.freepik.com/premium-vector/cute-shiba-inu-snowboarding-cartoon-vector-icon-illustration_480044-354.jpg"></img><p className="app-name">Snowpad</p></div>
            </Link>
            <Link to='/create'>
                <div className="create-link-container"><img className="create-link" src="https://cdn.pixabay.com/photo/2017/01/10/23/01/icon-1970474_1280.png"></img></div>
            </Link>
        </div>
    );
}

export default Header;