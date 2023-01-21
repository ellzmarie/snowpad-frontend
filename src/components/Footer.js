import React from 'react';

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="column">
            <h4>COLUMN 1</h4>
            <ul className="list-unstyled">
              <li>342-555-9999</li>
              <li>Moscow, Russia</li>
              <li>123 Street South North</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="column">
            <h4>COLUMN 2</h4>
            <ul className="list-unstyled">
              <li>line 1</li>
              <li>line 2</li>
              <li>line 3</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="column">
            <h4>COLUMN 3</h4>
            <ul className="list-unstyled">
            <li>line 1</li>
              <li>line 2</li>
              <li>line 3</li>
            </ul>
          </div>
          {/* Column4 */}
          <div className="column">
            <h4>COLUMN 4</h4>
            <ul className="list-unstyled">
            <li>line 1</li>
              <li>line 2</li>
              <li>line 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
