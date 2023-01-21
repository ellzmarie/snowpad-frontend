import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="main-footer">
      <div>Click to add product</div>
      <Link to='/create'>
        <div className="create-link-container"><img className="create-link" src="https://cdn.pixabay.com/photo/2017/01/10/23/01/icon-1970474_1280.png"></img></div>
      </Link>

      <div className="container">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <div className="row">

          {/* Column1 */}
          <div className="column">
            <h4>Cody Clark</h4>
            <p><b>Fave snowpad: </b>Pink Turtle</p>
            <p><a href="https://www.linkedin.com/in/codycodes/" target="_blank" class="fa fa-linkedin"></a></p>
          </div>

          {/* Column2 */}
          <div className="column">
            <h4>Sonam Karia</h4>
            <p><b>Fave snowpad: </b>Avocado</p>
            <p><a href="https://www.linkedin.com/in/sonamkaria/" target="_blank" class="fa fa-linkedin"></a></p>
          </div>

          {/* Column3 */}
          <div className="column">
            <h4>Winston Tang</h4>
            <p><b>Favorite snowpad: </b>Blue Turtle</p>
            <p><a href="https://www.linkedin.com/in/winstontang5/" target="_blank" class="fa fa-linkedin"></a></p>
          </div>

          {/* Column4 */}
          <div className="column">
            <h4>Ellie Matutis-Digal</h4>
            <p><b>Favorite snowpad: </b>Totoro</p>
            <p><a href="https://www.linkedin.com/in/elliematutis-digal/" target="_blank" class="fa fa-linkedin"></a></p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
