import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { FaUserPlus } from 'react-icons/fa';
import About from '../components/About';
import Divider from '../components/Divider';
import Gallery from '../components/Gallery';
import Links from '../components/Links';
import Recommendation from '../components/Recommendation';
import ShareLinks from '../components/ShareLinks';
import data from '../data';

const HomeScreen = () => {
 console.log(data);
 return (
  <div>
   <Image src={data.header} alt='Header image' fluid />
   <div className='background'>
    <Links />

    <div>
     <a href={data.addContact}>
      <Button className='addBtn btn btn-success' type='button' size='lg'>
       <FaUserPlus size={25} /> <span> שמור אותי באנשי הקשר</span>
      </Button>
     </a>
    </div>

    <h3 className='text-white pt-3'>לשלוח כרטיס ביקור</h3>
    <ShareLinks />

    <Divider />

    <Gallery />

    <Divider />

    <About />

    <Divider />

    <h2 className='text-white pb-3'>לקוחות ממליצים</h2>
    <Recommendation />
    <Divider />
   </div>
  </div>
 );
};

export default HomeScreen;
