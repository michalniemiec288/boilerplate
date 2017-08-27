import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Field as renderField } from '../../../../components'
import { Field, reduxForm } from 'redux-form'

class ChangePassword extends Component {
  componentWillUnmount() {
    const { firebaseMessage, resetForm } = this.props
    if (firebaseMessage) resetForm()
  }
  render() {
    const { handleSubmit, submitting, pristine, changePassword } = this.props
    return (
      <form onSubmit={handleSubmit(changePassword)}>
        <Field
          component={renderField}
          name="password"
          type="password"
          label="Hasło: "
          placeholder="Zmiana hasła..."
        />
        <Field
          component={renderField}
          name="repeatPassword"
          type="password"
          label="Powtórz hasło: "
        />
        <Button
          type="submit"
          bsStyle="primary"
          disabled={submitting || pristine}
        >
          Zapisz
        </Button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'changePassword'
})(ChangePassword)
