import { Container } from "react-bootstrap"

const Resume = () => {
  return (
    <Container fluid className="resume-section">
      <div className="resume-page">
        <div className="resume-download">
          <button className="resume-btn">
            Tải Xuống CV
          </button>
        </div>
        <div className="resume-body-cv">
            <div className="resume-cv">
              <img src="https://jobsgo.vn/blog/wp-content/uploads/2021/04/Tranh-nhung-buc-anh-khong-phu-hop.jpg" alt="" />
            </div>
          </div>
          <div className="resume-download">
          <button className="resume-btn">
            Tải Xuống CV
          </button>
        </div>
      </div>
    </Container>
  )
}

export default Resume
