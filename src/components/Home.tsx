import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid className="home-page">
      <div className="block-hi-there">
        <div className="block-hi-left">
          <h1>Hi There!</h1>
          <h1>I'm Nguyen Son</h1>
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