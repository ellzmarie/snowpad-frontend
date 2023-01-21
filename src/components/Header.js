import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <div className="app-title"><img className="stock-kawaii-app-icon" src="https://img.freepik.com/premium-vector/cute-shiba-inu-snowboarding-cartoon-vector-icon-illustration_480044-354.jpg"></img><p className="app-name">Snowpad</p></div>
            </Link>
        </div>
    );
}

export default Header;