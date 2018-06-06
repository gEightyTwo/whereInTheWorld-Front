import React from 'react'
import { Row } from 'react-materialize'

const Navbar = () => {
    return(
        <Row className="nav-row">
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo">Nomad</a>
              <div className="valign-wrapper right welcome">
                <p className="hide-on-med-and-down">{`Welcome, User`}</p>
              </div>
            </div>
          </nav>
        </Row>
    )
}

export default Navbar