import React, { Component } from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router'

class Head extends Component {
  componentWillMount() {
    this.props.fetchUser()
  }
  componentWillUpdate() {
    this.props.fetchUser()
  }
  render() {
    const { currentUser, logoutUser } = this.props
    const { Header, Toggle, Collapse } = Navbar
    return (
      <header>
        <Link className="logo" to='/'>
          <h2>example</h2>
        </Link>
        <Navbar>
          <Header>
            <Toggle />
          </Header>
          <Collapse>
            <Nav>
              <li>
                <Link to="/">
                  Strona glówna
                </Link>
              </li>
              <li>
                <Link to="/events">
                  Inna strona
                </Link>
              </li>
            </Nav>
            {currentUser &&
              <Nav>
                <li>
                  <Link to="/profile">
                    Profil
                  </Link>
                </li>
                <li>
                  <Link to="/logout" onClick={logoutUser}>
                    Wyloguj
                  </Link>
                </li>
              </Nav>
            }
          </Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Head
