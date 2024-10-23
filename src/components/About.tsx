import { Container } from "react-bootstrap"

const About = () => {
  return (
    <Container fluid className="about-page">
      <div className="about-two-column">
        <div className="about-column-left">
            <div className="about-left-code">
              <h1>Know Kho I'M</h1>
              <p>Chào mọi người, tôi là Văn Sơn đến từ Hà Nội, Việt Nam.</p>
              <p>Hiện tại tôi làm việc với vai trò nhà sáng tạo</p>
              <br />
              <p>Ngoài việc viết mã, một số hoạt động mà tôi thích làm!</p>
              <ul>
                <li className="about-activity">Chơi trò chơi</li>
                <li className="about-activity">Đá Bóng</li>
                <li className="about-activity">Du lịch</li>
              </ul>
            </div>
            <p></p>
        </div>
        <div className="about-column-right">
            <img src="https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2024/9/14/f04868fef5bc53e20aad-read-only-17263260193451134935576.jpg" alt="" />
        </div>
      </div>
      <div className="about-full">
        Kỹ năng Chuyên nghiệp
      </div>
      
    </Container>
  )
}

export default About
