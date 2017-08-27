import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'

const Field = ({
	input,
	label,
	type,
	meta: { touched, error },
	placeholder
}) =>
	<FormGroup>
		<label>
			{label}
		</label>
		<div>
			<FormControl
				{...input}
				placeholder={placeholder}
				type={type}
			/>
			{touched && error &&
				<span style={{ color: 'yellow' }}>
					{error}
				</span>
			}
		</div>
	</FormGroup>

export default Field
