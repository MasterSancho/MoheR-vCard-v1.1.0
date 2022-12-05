import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaSms, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const ShareLinks = () => {
 return (
  <Container className='px-5'>
   <Row>
    <Col>
     <a href='mailto:?subject=IRC%20%D7%9E%D7%A9%D7%94%20%D7%A8%D7%95%D7%96%D7%A0%D7%A6%D7%95%D7%95%D7%99%D7%99%D7%92%20-%20%D7%96%D7%9B%D7%99%D7%99%D7%9F%20%D7%A8%D7%99%D7%9E%D7%A7%D7%A1&amp;body=https%3A%2F%2Fmr-nadlan.web.app%2F'>
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
     <a href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmr-nadlan.web.app%2F'>
      <FaFacebook className='text-danger' size={30} />
     </a>
    </Col>
   </Row>
  </Container>
 );
};

export default ShareLinks;
