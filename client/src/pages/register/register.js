import React from 'react';
import { Wrapper } from '../../components';
import { Link } from 'react-router-dom';
import errorImage from '../../assets/images/not-found.svg';

const Register = () => {
	return (
		<Wrapper className="full-page">
			<div>
				<img src={errorImage} alt="404 Page not Found" />
				<h3>Ohh! Page Not Found</h3>
				<p>We can't seem to find the page you're looking for</p>
				<Link to="/">back home</Link>
			</div>
		</Wrapper>
	);
};

export default Register;
