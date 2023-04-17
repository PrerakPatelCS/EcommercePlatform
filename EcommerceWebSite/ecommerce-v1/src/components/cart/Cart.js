import ListGroup from 'react-bootstrap/ListGroup';
import './Cart.css';
import { ClimbingBoxLoader } from 'react-spinners';



const Cart = ({apparel}) => {
  return (
    <div className='list-container'>
      <h4><strong>Shopping Cart</strong></h4>
      <ListGroup className='list'>
        {
          apparel && apparel.length > 0
          ? apparel.map((apparel) =>{
            return(
              <ListGroup.Item variant="success">
                <ListGroup horizontal className='list-horizontal'>
                  <ListGroup.Item className='list-horizontal-item'>
                    <img src={apparel.imageUrl} />
                  </ListGroup.Item>
                  <ListGroup.Item className='list-horizontal-item'>{apparel.name}</ListGroup.Item>
                  <ListGroup.Item className='list-horizontal-item'>{apparel.category}</ListGroup.Item>
                  <ListGroup.Item className='list-horizontal-item'>Price = ${apparel.price}</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            );
          })
        :(
          <div className='loading'>
              <h4>Loading.....</h4>
              <ClimbingBoxLoader color={'white'} size={45}/>
          </div>
        )}
      </ListGroup>
    </div>
  )
}

export default Cart