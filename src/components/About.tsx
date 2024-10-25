import { Container } from "react-bootstrap"
import GitHubCalendar from "react-github-calendar"
import { CgCPlusPlus } from "react-icons/cg"
import { DiGit, DiJava, DiJavascript1, DiMongodb, DiNodejs, DiPython, DiReact } from "react-icons/di"
import { SiFirebase, SiMacos, SiNextdotjs, SiPostgresql, SiPostman, SiRedis, SiSlack, SiSolidity, SiVercel, SiVisualstudiocode } from "react-icons/si"
import { TbBrandGolang } from "react-icons/tb"

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
      <h1 className="about-heading">Kỹ năng Chuyên nghiệp</h1>
      <div className="about-full">
        <div className="about-tech-icons col-md-2">
          <CgCPlusPlus />
        </div>
        <div className="about-tech-icons col-md-2">
          <DiJavascript1 />
        </div>
        <div className="about-tech-icons col-md-2">
          <TbBrandGolang />
        </div>
        <div className="about-tech-icons col-md-2">
          <DiNodejs />
        </div>
        <div className="about-tech-icons col-md-2">
          <DiReact />
        </div>
        <div className="about-tech-icons col-md-2">
          <SiSolidity />
        </div>
        <div className="about-tech-icons col-md-2">
          <DiMongodb />
        </div>
        <div className="about-tech-icons col-md-2">
          <SiNextdotjs />
        </div>
        <div className="about-tech-icons col-md-2">
          <DiGit />
        </div>
        <div className="about-tech-icons col-md-2">
          <SiFirebase />
        </div>
        <div className="about-tech-icons col-md-2">
          <SiRedis />
        </div>
        <div className="about-tech-icons col-md-2">
          <SiPostgresql />
        </div>
        <div className="about-tech-icons col-md-2">
          <DiPython />
        </div>
        <div className="about-tech-icons col-md-2">
          <DiJava />
        </div>
      </div>
      <h1 className="about-heading">Công cụ tôi sử dụng</h1>
      <div className="about-full">
        <div className="about-tech-icons col-md-2">
          <SiMacos />
        </div>
        <div className="about-tech-icons col-md-2">
          <SiVisualstudiocode />
        </div>
        <div className="about-tech-icons col-md-2">
          <SiPostman />
        </div>
        <div className="about-tech-icons col-md-2">
          <SiSlack />
        </div>
        <div className="about-tech-icons col-md-2">
          <SiVercel />
        </div>
      </div>
      <div className="about-list">
        <h1 className="about-heading-add">Mã 1 ngày</h1>
      </div>
      <div className="about-keyboard">
        <GitHubCalendar
        username="soumyajit4419"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        />
      </div>
    </Container>
  )
}

export default About
