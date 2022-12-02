import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaSms, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const ShareLinks = () => {
 return (
  <Container className='px-5'>
   <Row>
    <Col>
     <a href='#'>
      <FaEnvelope className='text-danger' size={30} />
     </a>
    </Col>

    <Col>
     <a href='#'>
      <FaSms className='text-danger' size={30} />
     </a>
    </Col>

    <Col>
     <a href='#'>
      <FaWhatsapp className='text-danger' size={30} />
     </a>
    </Col>

    <Col>
     <a href='#'>
      <FaFacebook className='text-danger' size={30} />
     </a>
    </Col>
   </Row>
  </Container>
 );
};

export default ShareLinks;
