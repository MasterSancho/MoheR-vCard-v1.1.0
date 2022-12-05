import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaSms, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const ShareLinks = () => {
 return (
  <Container className='px-5'>
   <Row>
    <Col>
     <a href='mailto:?subject=%D7%9E%D7%A9%D7%94%20%D7%A8%D7%95%D7%96%D7%95%D7%A0%D7%A6%D7%95%D7%95%D7%99%D7%92%20-%20%D7%9E.%D7%A8%20%D7%A0%D7%93%D7%9C%22%D7%9F&amp;body=https%3A%2F%2Fmr-nadlan.web.app%2F'>
      <FaEnvelope className='text-danger' size={30} />
     </a>
    </Col>

    <Col>
     <a href='sms://?&amp;body=%D7%9E%D7%A9%D7%94%20%D7%A8%D7%95%D7%96%D7%95%D7%A0%D7%A6%D7%95%D7%95%D7%99%D7%92%20-%20%D7%9E.%D7%A8%20%D7%A0%D7%93%D7%9C%22%D7%9F%0Amr-nadlan.web.app%2F'>
      <FaSms className='text-danger' size={30} />
     </a>
    </Col>

    <Col>
     <a href='https://api.whatsapp.com/send?text=*%D7%9E%D7%A9%D7%94%20%D7%A8%D7%95%D7%96%D7%95%D7%A0%D7%A6%D7%95%D7%95%D7%99%D7%92%20-%20%D7%9E.%D7%A8%20%D7%A0%D7%93%D7%9C%22%D7%9F*%20https%3A%2F%2Fmr-nadlan.web.app%2F'>
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
