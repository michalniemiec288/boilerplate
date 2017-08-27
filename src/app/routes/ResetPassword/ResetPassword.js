import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import { Field as renderField } from '../../components'

class ResetPassword extends Component {
  componentWillUnmount() {
    const { firebaseMessage, resetForm } = this.props
    if (firebaseMessage) resetForm()
	}
	render() {
		const { handleSubmit, submitting, pristine, resetPasswordEmail, firebaseMessage } = this.props
		return (
			<form onSubmit={handleSubmit(resetPasswordEmail)}>
				<Row>
					<Col sm={6} smOffset={3}>
						<Field
							component={renderField}
							name="email"
							type="email"
							label="Email: "
							placeholder="Podaj email na który zostanie wysłane nowe hasło..."
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
							Przypomnij
						</Button>
					</Col>
				</Row>
			</form>
		);
	}
}

export default reduxForm({
  form: 'resetPassword'
})(ResetPassword)

