import React, { Component } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { Field as renderField } from '../../components'
import { Field, reduxForm } from 'redux-form'
import validate from './helpers/validate'

class Register extends Component {
	componentWillUnmount() {
		const { firebaseMessage, resetForm } = this.props
		if (firebaseMessage) resetForm()
	}
	render() {
		const { submitting, pristine, handleSubmit, currentUser, firebaseMessage, registerUser } = this.props
	return (
			<form onSubmit={handleSubmit(registerUser)}>
				<Row>
					<Col sm={6} smOffset={3}>
						<Field
							component={renderField}
							name="email"
							type="text"
							label="Email: "
							placeholder="Podaj email..."
						/>
						<Field
							component={renderField}
							name="password"
							type="password"
							label="Hasło: "
							placeholder="Hasło musi mieć conajmniej 6 znaków..."
						/>
						{firebaseMessage &&
							<div style={{ color: 'yellow', margin: '15px' }}>
								{firebaseMessage}
							</div>
						}
						<Button
							type="submit"
							disabled={submitting || pristine}
						>
							Zarejestruj
						</Button>
					</Col>
				</Row>
			</form>
		)
	}
}

export default reduxForm({
	form: 'register',
	validate
})(Register)

