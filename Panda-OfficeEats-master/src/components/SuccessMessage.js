import React from 'react';

const SuccessMessage = ({ clearForm }) => {
    return (
        <div className="alert alert-dismissible alert-success">
            <button type="button" className="close" onClick={clearForm}>&times;</button>
            <strong>Thank you for signing up for Cognizeats!</strong>
            <p>Checkout the amazing restaurants near your Cognizant office!</p>
        </div>
    )
};

export default SuccessMessage;