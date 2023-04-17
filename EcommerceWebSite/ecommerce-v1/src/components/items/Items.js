import { Paper } from '@mui/material';
import { Card } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import './Items.css';
import { RiseLoader } from 'react-spinners';



const Items = ({apparel}) => {
  return (
    <div className='apparel-items-container'>
        {
        apparel && apparel.length > 0
        ? apparel.map((apparel) =>{
            return (
                <Card>
                    <Card.Body>
                        <img className='card-img-top' src={apparel.imageUrl} />
                        <h2 className='card-title'>{apparel.name}</h2>
                        <h6 className='card-description'>{apparel.description}</h6>
                        <p className='card-text'><strong>Price = ${apparel.price}</strong></p>
                        <Button className="card-btn">Add to Cart</Button>
                    </Card.Body>
                </Card>

            );
        })
        :(
            <div className='loading'>
                <h4>Loading.....</h4>
                <RiseLoader color={'#fff'} size={150} />
            </div>
        )}

    </div>
  );
};

export default Items