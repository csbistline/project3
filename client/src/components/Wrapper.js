import React from "react";
import Container from "react-bootstrap/Container"

function Wrapper(props) {
  return <Container fluid className="mt-5" {...props} />;
}

export default Wrapper;
