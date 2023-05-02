import ListGroup from 'react-bootstrap/ListGroup';
import './Cart.css';
import { ClimbingBoxLoader } from 'react-spinners';
import {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import api from '../../api/axiosConfig';


const Cart = ({user, getUser}) => {
  const[cart, setCart] = useState(null);
  const[loading, setLoading] = useState(false);

  useEffect(() =>{
    if(user){
      setCart(user.cart);
      console.log(cart);
    }
  }, [user]);


  const removeFromCart = async (item) => {

    try{
      const response = "api/apparelQuantity/delete/" + user.username +"/" + item.id;

      console.log(item.id);


      console.log(response);
    }
    catch(err){
      console.log(err);
    }
  }

  const addToOrder = async () => {
    if(loading){
      alert("Request in progress");
    }

    setLoading(true);

    try{
      const response = await api.put("api/orderHistory/" + user.username);
      await getUser(user.username);
      console.log(response);
    }
    catch(err){
      console.log(err);
    }
    
    setLoading(false);

  }


  return (
    <div className='list-container'>
      <h4><strong>Shopping Cart</strong></h4>
      <ListGroup className='list'>
      {
        cart && cart.apparelIds.length > 0 ? 
        cart.apparelIds.map((item) =>{
          return(
            <ListGroup.Item variant = "success">
              <ListGroup horizontal className='list-horizontal'>
                <ListGroup.Item className='list-horizontal-item'>
                  <img src={item.apparel.imageUrl} />
                </ListGroup.Item>
                <ListGroup.Item className='list-horizontal-item'>{item.apparel.name}</ListGroup.Item>
                <ListGroup.Item className='list-horizontal-item'>{item.apparel.category}</ListGroup.Item>
                <ListGroup.Item className='list-horizontal-item'>Price = ${item.apparel.price}</ListGroup.Item>
                <ListGroup.Item className='list-horizontal-item'>{item.quantity}</ListGroup.Item>
                <ListGroup.Item className='list-horizontal-item' onClick={() => removeFromCart(item)}><Button>Remove?</Button></ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
              
          );
        }
        )
        :cart ? (
          <h5>Add To Cart!</h5>
        )
        :(
          <div className='loading'>
              <h4>Loading.....</h4>
              <ClimbingBoxLoader color={'white'} size={50}/>
          </div>
        )}
        {cart && cart.apparelIds.length > 0 &&
        <div>
          <ListGroup.Item variant='success'>
            <ListGroup horizontal className='list-horizontal'>
              <ListGroup.Item className='list-horizontal-item'>{cart.subtotal}</ListGroup.Item>
              <ListGroup.Item className='list-horizontal-item'>{cart.total}</ListGroup.Item>
              <ListGroup.Item className='list-horizontal-item'>{cart.dateOrdered}</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <button disabled={loading} onClick={() =>addToOrder()}>Order</button>
        </div>
      }
      </ListGroup>
    </div>
  )
}

export default Cart