import { Container, Row, Col, Image } from 'react-bootstrap';
import data from '../data';

const Divider = () => {
 return (
  <div className='text-danger p-3'>
   <Container>
    <Row>
     <Col className='pt-3'>
      <hr />
     </Col>

     <Col className='pt-3'>
      <hr />
     </Col>

     <Col>
      <Image src={data.logo} alt='Divider logo' fluid />
     </Col>

     <Col className='pt-3'>
      <hr />
     </Col>

     <Col className='pt-3'>
      <hr />
     </Col>
    </Row>
   </Container>
  </div>
 );
};

export default Divider;
