import ListGroup from 'react-bootstrap/ListGroup';
import '../cart/Cart.css';
import { ClockLoader } from 'react-spinners';
import {useState, useEffect} from 'react';



const OrderHistory = ({user}) => {
  const[orderHistory, setOrderHistory] = useState(null);

  useEffect(() =>{
    if(user){
      setOrderHistory(user.orderHistory);
      console.log(orderHistory);
    }
  }, []);

  return (
    <div className='list-container'>
      <h4><strong>Order History</strong></h4>
      <ListGroup className='list'>
        {
          orderHistory && orderHistory.cartIds.length > 0
          ? orderHistory.cartIds.map((item) =>{
            return(
              <ListGroup.Item variant="success">
                <ListGroup className='list-horizontal'>
                  {
                    item.apparelIds.map((cartItem) =>{
                      return(
                        <ListGroup.Item variant = 'success'>
                          <ListGroup horizontal className='list-horizontal'>
                            <ListGroup.Item className='list-horizontal-item'>
                              <img src={cartItem.apparel.imageUrl} />
                            </ListGroup.Item>
                            <ListGroup.Item className='list-horizontal-item'>{cartItem.apparel.name}</ListGroup.Item>
                            <ListGroup.Item className='list-horizontal-item'>{cartItem.apparel.category}</ListGroup.Item>
                            <ListGroup.Item className='list-horizontal-item'>Price = ${cartItem.apparel.price}</ListGroup.Item>
                            <ListGroup.Item className='list-horizontal-item'>{cartItem.quantity}</ListGroup.Item>
                          </ListGroup>
                        </ListGroup.Item>
                      );
                    })
                  }
                </ListGroup>
                <ListGroup.Item variant='success'>
                    <ListGroup horizontal className='list-horizontal'>
                      <ListGroup.Item className='list-horizontal-item'>{item.subtotal}</ListGroup.Item>
                      <ListGroup.Item className='list-horizontal-item'>{item.total}</ListGroup.Item>
                      <ListGroup.Item className='list-horizontal-item'>{item.dateOrdered}</ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
              </ListGroup.Item>
            );
          })
        : orderHistory ? (
          <h5>Order Something!</h5>
        )
        :(
          <div className='loading'>
              <h4>Loading.....</h4>
              <ClockLoader color={'white'} size={350}/>
          </div>
        )}
      </ListGroup>
    </div>
  )
}

export default OrderHistory