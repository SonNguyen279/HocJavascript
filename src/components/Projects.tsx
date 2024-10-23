import { Container } from "react-bootstrap"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <div className="projects-page">
        <div className="project-full">
          <h1>Các tác phẩm gần đây của tôi</h1>
          <p>Đây là một số dự án tôi đã làm gần đây</p>
        </div>

        <div className="project-three-columns">
            <div className="project-columns project-three">
              <div className="project-content-columns project-add">
                <img src="https://soumyajit.vercel.app/static/media/chatify.7206044e0b5cdad44726.png" alt="Trò chuyện" className="project-img-columns" />
                <h3 className="project-heading-columns">Trò chuyện</h3>
                <p className="project-desc-columns">Phòng trò chuyện cá nhân hoặc Không gian làm việc để chia sẻ tài nguyên và hangout với bạn bè được xây dựng bằng Reac.js, Material-UI và Firebase. Có các tính năng cho phép người dùng nhắn tin theo thời gian thực, chia sẻ hình ảnh cũng như hỗ trợ phản ứng trên tin nhắn.</p>
              </div>
            </div>

            <div className="project-columns project-three">
              <div className="project-content-columns project-add">
                <img src="https://soumyajit.vercel.app/static/media/blog.fb8ab7f271a937d5fc01.png" alt="Viết Mã" className="project-img-columns" />
                <h3 className="project-heading-columns">Viết Mã</h3>
                <p className="project-desc-columns">Trang blog cá nhân của tôi được xây dựng bằng Next.js và Tailwind Css, lấy nội dung từ các tệp makdown và hiển thị nội dung đó bằng Next.js. Hỗ trợ chế độ tối và dễ dàng viết blog bằng cách sử dụng markdown.</p>
              </div>
              
            </div>

            <div className="project-columns project-three">
              <div className="project-content-columns project-add">
                <img src="https://soumyajit.vercel.app/static/media/codeEditor.1b585492490c8c1cace9.png" alt="Trang Web" className="project-img-columns" />
                <h3 className="project-heading-columns">Trang Web</h3>
                <p className="project-desc-columns">Xây dựng trình soạn thảo mã và đánh dấu trực tuyến bằng Reac.js. Trình chỉnh sửa trực tuyến hỗ trợ mã html, css và js với chế độ xem trang web ngay lập tức. Trình chỉnh sửa đánh dấu trực tuyến để xây dựng tệp README hỗ trợ GFM, thẻ Html tùy chỉnh với thanh công cụ và xem trước tức thì. Cả hai trình chỉnh sửa đều hỗ trợ tự động lưu công việc bằng Bộ nhớ cục bộ.</p>
              </div>
            </div>

            <div className="project-columns project-three">
              <div className="project-content-columns project-add">
                <img src="https://soumyajit.vercel.app/static/media/leaf.ff2616f664c8c0ceab91.png" alt="AI thực vật" className="project-img-columns" />
                <h3 className="project-heading-columns">AI thực vật</h3>
                <p className="project-desc-columns">Sử dụng bộ dữ liệu bệnh thực vật từ Kaggle và đào tạo mô hình phân loại hình ảnh bằng khuôn khổ 'PyTorch' sử dụng CNN và Transfer Learning với 38 lớp lá cây khác nhau. Mô hình đã có thể phát hiện thành công lá bệnh và lá khỏe mạnh của 14 loại cây riêng biệt. Tôi đã có thể đạt được độ chính xác 98% bằng cách sử dụng mô hình được đào tạo trước Resnet34.</p>
              </div>
            </div>

            <div className="project-columns project-three">
              <div className="project-content-columns project-add">
                <img src="https://soumyajit.vercel.app/static/media/codeEditor.1b585492490c8c1cace9.png" alt="AI vì lợi ích xã hội" className="project-img-columns" />
                <h3 className="project-heading-columns">AI vì lợi ích xã hội</h3>
                <p className="project-desc-columns">Sử dụng 'Xử lý ngôn ngữ tự nhiên' để phát hiện các bài đăng liên quan đến tự tử và ý định tự tử của người dùng trên không gian mạng và do đó giúp ngăn ngừa tự tử.</p>
              </div>
            </div>

            <div className="project-columns project-three">
              <div className="project-content-columns project-add">
                <img src="https://soumyajit.vercel.app/static/media/emotion.eabfc16e7a146ab15778.png" alt="Nhận diện khuôn mặt và phát hiện cảm xúc" className="project-img-columns" />
                <h3 className="project-heading-columns">Nhận diện khuôn mặt và phát hiện cảm xúc</h3>
                <p className="project-desc-columns">Đã đào tạo một bộ phân loại CNN sử dụng 'bộ dữ liệu FER-2013' với Keras và TensorFlow được hỗ trợ. Bộ phân loại đã dự đoán thành công nhiều loại cảm xúc khác nhau của con người. Và độ chính xác cao nhất thu được với mô hình là 60,1%. Sau đó sử dụng Open-CV để phát hiện khuôn mặt trong ảnh và sau đó chuyển khuôn mặt cho bộ phân loại để dự đoán cảm xúc của một người.</p>
              </div>
            </div>
        </div>
      </div>
    </Container>
  )
}

export default Projects
