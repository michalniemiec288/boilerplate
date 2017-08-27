import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Row, Col, Grid, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import { Field as renderField } from '../../components'
import validate from './helpers/validate'

class Login extends Component {
  componentWillUnmount() {
    const { firebaseMessage, resetForm } = this.props
    if (firebaseMessage) resetForm()
  }
  render() {
    const { handleSubmit, pristine, reset, submitting, loginUser, firebaseMessage, currentUser } = this.props
    return (
      currentUser
      ? <div>
          Jesteś już zalogowany
        </div>
      : <form onSubmit={handleSubmit(loginUser)}>
          <Row>
            <Col sm={6} smOffset={3}>
              <Field
                component={renderField}
                name="email"
                type="email"
                label="Email: "
                placeholder="Email..."
              />
              <Field
                component={renderField}
                name="password"
                type="password"
                label="Hasło: "
                placeholder="Hasło..."
              />
              {firebaseMessage &&
                <div style={{ color: 'yellow', margin: '15px' }}>
                  {firebaseMessage}
                </div>
              }
              <Button
                type="submit"
                bsStyle="primary"
                disabled={submitting || pristine}
              >
                Zaloguj
              </Button>
            </Col>
          </Row>
          <Row className="questions">
            <Link className="link" to="/register">
              Zarejestruj się
            </Link>
            <Link className="link" to="/reset">
              Zapomniałeś hasła?
            </Link>
          </Row>
        </form>
    )
  }
}

export default reduxForm({
  form: 'login',
  validate,
})(Login)
