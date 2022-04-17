import image1 from '../../../img/bannr/pic1.png'
import image2 from '../../../img/bannr/pic2.png'
import image3 from '../../../img/bannr/pic3.png'

import Footer from '../Footer/Footer';
import Services from '../Services/Services';

import './Home.css'

const Home = () => {
  return (
    <div>
      <div>
      <section className='section'>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block image-height img-fluid w-100" alt="..."/>
            <div class="carousel-caption  d-md-block slide-text">

              <h1>Brush Your Teeth Everyday</h1>
              <p>We are alaways try to manage best with your choice.</p>
          
            </div>
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100 image-height img-fluid" alt="..."/>
            <div class="carousel-caption  d-md-block">
              <h1>Visit your Dentist in every Six month</h1>
              <p>We are alaways ready to service as your choice.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100 image-height img-fluid" alt="..."/>
            <div class="carousel-caption  d-md-block">
              <h1>Keep Smiling Everyday</h1>
              <p>You always get service as we committed with you.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
      </div>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;