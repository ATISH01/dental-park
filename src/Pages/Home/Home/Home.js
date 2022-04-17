
import img from '../../../img/portrait-smiling-handsome-male-doctor-man-min-removebg-preview.png'
import Services from '../Services/Services';

import './Home.css'

const Home = () => {
  return (
        <div>
          <div className='row g-0 banner'>
            <div className='tooth col-sm-1 col-md-6 d-flex align-items-center p-3 fs-4 mt-3'>
                <div className=' margin'>
                <h1>Dental Park</h1>
                <p className='fs-3'>Blessed are those who can hold lively conversations with the helplessly mute, for they shall be called dentists</p>
                </div>
            </div>
            <div className='col-sm-1 col-md-6 '>
                <img src={img} alt="" />
            </div>
           </div>
        <Services></Services>
        </div>
    );
};

export default Home;