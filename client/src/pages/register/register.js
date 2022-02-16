import Wrapper from '../../assets/wrappers/RegisterPage';
import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../../components';

const initialValues = {
	name: '',
	email: '',
	password: '',
	isMember: true,
	showAlert: false,
};
function Register() {
	const [values, setValues] = useState(initialValues);

	const handleOnChange = (e) => {
		console.log(e.target);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
	};

	const toggleMemberOnClick = () => {
		setValues({ ...values, isMember: !values.isMember });
	};

	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={handleOnSubmit}>
				<Logo />

				<h3>{values.isMember ? 'Login' : 'Register'}</h3>
				{values.showAlert && <Alert alertClass={'alert alert-danger'} alertMessage={'Alert goes here'} />}

				{!values.isMember && (
					<FormRow type={'text'} name={'name'} value={values.name} handleOnChange={handleOnChange} />
				)}
				<FormRow type={'text'} name={'email'} value={values.email} handleOnChange={handleOnChange} />
				<FormRow type={'password'} name={'password'} value={values.password} handleOnChange={handleOnChange} />

				<p>
					{values.isMember ? 'Not a member yet?' : 'Already a member?'}

					<button type="button" onClick={toggleMemberOnClick} className="member-btn">
						{values.isMember ? 'Register' : 'Login'}
					</button>
				</p>

				<button className="btn btn-block" type="submit">
					submit
				</button>
			</form>
		</Wrapper>
	);
}

export default Register;
