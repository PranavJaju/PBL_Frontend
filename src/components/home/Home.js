import './Home.css'
import Footer from '../footer/Footer'
import Carousel from '../carousel/Carousel';
import i2 from '../images/i2.jpg'
import RD from '../rd/RD'
import Description from '../description/Description'
const Home = () => {
  return (
    <div clasName="Home">

      <div clasName="container1">
        <Carousel />
      </div>

      <div className="container2">
        <RD />
      </div>

      <div className="container3">
        <Description />
      </div>

      <div className="container4">
        <div className='team-members'>
          <div className="card">
            <img src={i2} className="card-img-top" alt="..." />
            <div className="card-body">
              <p classNmae="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card">
            <img src={i2} className="card-img-top" alt="..." />
            <div className="card-body">
              <p classNmae="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card">
            <img src={i2} className="card-img-top" alt="..." />
            <div className="card-body">
              <p classNmae="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card">
            <img src={i2} className="card-img-top" alt="..." />
            <div className="card-body">
              <p classNmae="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container5">
        <Footer />
      </div>

    </div >
  );
}

export default Home;