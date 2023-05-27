import React from 'react'
import Alert from 'react-bootstrap/Alert';

const Error = ({ variant , children }) => {
    return (
      <Alert variant={variant} style={{ fontSize: 20}}>
        <strong>{children}</strong>
      </Alert>
    );
  };


export default Error;




