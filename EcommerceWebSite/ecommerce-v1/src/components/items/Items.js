import { Paper } from '@mui/material';
import { Card } from 'react-bootstrap';
import DropdownButton   from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown';
import './Items.css';
import { RiseLoader } from 'react-spinners';
import api from '../../api/axiosConfig';




const Items = ({apparel, user, getUser}) => {
    const addToCart = async (apparel, quantity) => {
        try{
            const parameters = {apparelName: apparel.name, quantity: `${quantity}`, username: user.username};
            const jsonString = JSON.stringify(parameters);
            
            console.log(jsonString);
            const response = await api.post("api/apparelQuantity", jsonString, {
                headers: {
                  "Content-Type": "application/json"
                }
            });
            console.log(response);
            await getUser(user.username);
        }
        catch(err){
            console.log(err);
        }
    }


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
                        <DropdownButton title='Add to Cart'>
                            {[1, 2, 3, 4, 5, 6].map(quantity => (
                                <Dropdown.Item key={quantity} onClick={() => addToCart(apparel, quantity)}>
                                {quantity}
                                </Dropdown.Item>
                            ))}
                        </DropdownButton>
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