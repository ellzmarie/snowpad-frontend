import {Link} from 'react-router-dom';

function Header() {
    return (
      <div className="nav">
          <Link to='/'>
            <div>Home</div>
          </Link>
          <Link to='/snowpads'>
            <div>Snowpads</div>
          </Link>
      </div>
    );
  }
  
  export default Header;