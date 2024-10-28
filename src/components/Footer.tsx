import { Container } from 'react-bootstrap'
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container fluid className="footer-page">
        <div className='footer-all'>
            <div className='footer-copywright footer-md-4'>
                <h3>Được thiết kế và phát triển bởi Sơn Nguyễn</h3>
            </div>
            <div className='footer-copywright footer-md-4'>
                <h3>Copyright © 2024 SB</h3>
            </div>
            <div className='footer-body footer-md-4'>
                <ul>
                    <li className='social-icons'><AiFillGithub /></li>
                    <li className='social-icons'><AiOutlineTwitter /></li>
                    <li className='social-icons'><FaLinkedinIn /></li>
                    <li className='social-icons'><AiFillInstagram /></li>
                </ul>
            </div>
        </div>
    </Container>
  )
}

export default Footer
