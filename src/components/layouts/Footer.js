import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <div>
      <Row>
        <Col>
          <div className="footerItem">Sp1</div>
        </Col>
        <Col>
          <div className="footerItem">Sp2</div>
        </Col>
        <Col>
          <div className="footerItem">Sp3</div>
        </Col>
        <Col>
          <div className="footerItem">Sp4</div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
