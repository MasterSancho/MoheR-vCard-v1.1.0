import { Container, Row, Col, Carousel } from 'react-bootstrap';

const Recommendation = () => {
 return (
  <Container className='d-inline-block'>
   <Row>
    <Col>
     <Carousel controls={false} indicators={false}>
      <Carousel.Item interval={3000}>
       <p className='badge bg-primary text-wrap py-3 px-3 fst-italic fs-5'>
        משה היקר, ברצוננו להודות לך מקרב לב על כל העזרה, התמיכה והסבלנות. אחרי
        כל כך הרבה המלצות שקבלנו עליך, לא היה לנו ספק שהגענו לבן אדם הנכון
        ועדיין הצלחת להפתיע אותנו. אני מאחלת לכל אחד לעבור מולך. מעריכים מאוד,
        משפחת נחום
       </p>
       <h4 className='text-danger'>משפחת נחום</h4>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
       <p className='badge bg-primary text-wrap py-3 px-3 fst-italic fs-5'>
        ללא ספק משה מספר 1 בתחום! מכיר את טבריה והאזור כמו את כף ידו. מקצועי,
        אדיב ויצרתי בטירוף. אנחנו מאוד מרוצים וממליצים לכולם בחום רב
       </p>
       <h4 className='text-danger'>אדווה בן דוד</h4>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
       <p className='badge bg-primary text-wrap py-3 px-3 fst-italic fs-5'>
        אני עובדת בתחום הנדל"ן שנים רבות ויוצא לי רבות לעבוד מול משה, להעזר בו
        ולהתייעץ איתו. יש לו ידע רב שרק תורם לו בתחום וזה בהחלט יתרון על פני
        אחרים. מעבר לזה, הוא מקצועי מאוד
       </p>
       <h4 className='text-danger'>סיון בלנק</h4>
      </Carousel.Item>
     </Carousel>
    </Col>
   </Row>
  </Container>
 );
};

export default Recommendation;
