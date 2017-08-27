import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { Field as renderField } from '../../../../components'
import { Field, reduxForm } from 'redux-form'

class ProfileSettings extends Component {
  componentWillUnmount() {
    const { firebaseMessage, resetForm } = this.props
    if (firebaseMessage) resetForm()
  }
  render() {
    const { handleSubmit, submitting, pristine, currentUser, updateUser } = this.props
    return (
      <form onSubmit={handleSubmit(updateUser)}>
        <Field
          component={renderField}
          name="email"
          type="text"
          label="Email: "
          placeholder={currentUser.email}
        />
        <Field
          component={renderField}
          name="displayName"
          type="text"
          label="Nazwa: "
          placeholder={currentUser.displayName}
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
  form: 'profileSettings'
})(ProfileSettings)
