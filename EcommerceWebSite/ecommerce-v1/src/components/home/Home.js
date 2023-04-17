import Hero from "../hero/Hero"
import Items from "../items/Items"
import { Container } from "react-bootstrap"

const Home = ({apparel}) => {
  return (
    <Container-fluid>
      <Hero apparel = {apparel} />
      <Items apparel = {apparel} />
    </Container-fluid>
  )
}

export default Home