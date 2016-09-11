import React from 'react'
import { connect } from 'react-redux'
import ContactFormComponent from './ContactFormComponent'
import { reduxForm } from 'redux-form'
import * as formValidations from './formValidations'

let ContactFormContainer = reduxForm({
	form: 'contact',
	fields: ['firstName'],
	validate: formValidations.createValidator({
		firstName: formValidations.required
	})
})(ContactFormComponent)

const mapStateToProps = null
const mapDispatchToProps = {
	// Note: we aren't actually doing anything with this. The ContactForm component has a propType, so I'm showing where it might come from.
	onSave: contactFormValues => { return { type: 'FORM_SUBMIT', payload: contactFormValues } }
}

ContactFormContainer = connect(mapStateToProps, mapDispatchToProps)(ContactFormContainer)

export default ContactFormContainer
