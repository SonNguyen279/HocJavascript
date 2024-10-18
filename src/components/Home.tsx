import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid className="home-page">
      <div className="block-hi-there">
        <div className="block-hi-left">
          <h3>Hi There!</h3>
          <h3>I'm Nguyen Son</h3>
          <p>Frontend Developer</p> 
        </div>
        <div className="block-hi-right">
          <img src="https://upload.wikimedia.org/wikipedia/en/3/3f/NobitaNobi.png" alt="" />
        </div>
      </div>
    </Container>
  )
}

export default Home;