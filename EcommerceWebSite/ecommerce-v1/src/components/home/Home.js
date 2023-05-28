import Hero from "../hero/Hero"
import Items from "../items/Items"
import { Container } from "react-bootstrap"


const Home = ({apparel, user, getUser}) => {
  return (
    <Container-fluid>
      <Hero apparel = {apparel} />
      <Items apparel = {apparel} user = {user} getUser={getUser}/>
    </Container-fluid>
  )
}

export default Home