import React from 'react';

const Alert = ({ alertMessage, alertClass }) => {
	return <div className={alertClass}>{alertMessage}</div>;
};

export default Alert;
