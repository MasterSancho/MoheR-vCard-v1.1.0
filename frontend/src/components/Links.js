import { Col, Container, Row } from 'react-bootstrap';
import {
 FaPhone,
 FaWhatsapp,
 FaWaze,
 FaFacebook,
 FaHome,
 FaEnvelope,
 FaChrome,
 FaListUl,
 FaBlackTie,
} from 'react-icons/fa';

const Links = () => {
 return (
  <Container className='lh-1'>
   <Row className='pt-4'>
    <Col>
     <a href='mailto:0542446751mr@gmail.com'>
      <FaEnvelope className='text-danger' size={30} />
     </a>
     <p>מייל</p>
    </Col>

    <Col>
     <a href='https://api.whatsapp.com/send?phone=9720542446751'>
      <FaWhatsapp className='text-danger' size={30} />
     </a>
     <p>וואטסאפ</p>
    </Col>

    <Col>
     <a href='tel:0542446751'>
      <FaPhone className='text-danger' size={30} />
     </a>
     <p>חייג אלי</p>
    </Col>
   </Row>

   <Row className='pt-1'>
    <Col>
     <a href='https://wa.me/c/972542446751'>
      <FaHome className='text-danger' size={30} />
     </a>
     <p>מעגר נכסים</p>
    </Col>

    <Col>
     <a href='https://www.facebook.com/m0542446751'>
      <FaFacebook className='text-danger' size={30} />
     </a>
     <p>פייסבוק</p>
    </Col>
   </Row>
  </Container>
 );
};

export default Links;
