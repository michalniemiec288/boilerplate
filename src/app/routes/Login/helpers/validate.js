export default (values) => {
	const errors = {}
	if (!values.email) {
		errors.email = 'Wymagane'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Nieprawidłowy email'
	}
	if (!values.password) {
		errors.password = 'Wymagane'
	}
	return errors
}
