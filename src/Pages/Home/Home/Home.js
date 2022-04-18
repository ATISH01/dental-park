import image1 from '../../../img/bannr/pic1.png'
import image2 from '../../../img/bannr/pic2.png'
import image3 from '../../../img/bannr/pic3.png'

import Footer from '../../Shared/Footer/Footer';
import Services from '../Services/Services';
import UserExperience from '../UserExperience/UserExperience';

import './Home.css'

const Home = () => {
  return (
    <div>
      <div>
      <section className='section'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block image-height img-fluid w-100" alt="..."/>
            <div className="carousel-caption  d-md-block slide-text">

              <h1>Brush Your Teeth Everyday</h1>
              
          
            </div>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100 image-height img-fluid" alt="..."/>
            <div className="carousel-caption  d-md-block">
              <h1>Visit your Dentist in every Six month</h1>
              
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100 image-height img-fluid" alt="..."/>
            <div className="carousel-caption  d-md-block">
              <h1>Keep Smiling Everyday</h1>
            
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
      </div>
      <Services></Services>
      <UserExperience></UserExperience>
  
    </div>
  );
};

export default Home;