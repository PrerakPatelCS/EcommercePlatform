import './Hero.css';
import Carousel from 'react-bootstrap/Carousel';
import { PacmanLoader } from 'react-spinners';


const Hero = ({apparel}) => {
  return (
    <div className='apparel-carousel-container'>
        <Carousel>
            {
                apparel && apparel.length > 0 
                ? apparel.map((apparel) =>{
                    return(
                        <Carousel.Item>
                            <img className='d-block w-100' src={apparel.imageUrl} alt=''/>
                            <Carousel.Caption>
                                <h3>{apparel.name}</h3>
                                <h4>{apparel.category}</h4>
                                <h5>{apparel.description}</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })
            :(
                <div className='loading'>
                    <h4>Loading.....</h4>
                    <PacmanLoader color={'yellow'} size={250}/>
                </div>
            )}
        </Carousel>
    </div>
  );
};

export default Hero