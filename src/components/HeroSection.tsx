import { CrownOutlined, PhoneOutlined } from '@ant-design/icons';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-background">
          <div className="hero-content">
            <div className="profile-wrapper">
              <img
                alt="Portrait of the graduate, Ngô Văn Trung"
                className="profile-image"
                src="/images/avatar.jpeg"
              />
              <div className="profile-badge">
                <CrownOutlined className="badge-icon" />
              </div>
            </div>
            <div className="hero-text">
              <h1 className="hero-title">Lễ tốt nghiệp của Trung</h1>
              <h2 className="hero-subtitle">6/12/2025</h2>
              <div className="hero-contact">
                <PhoneOutlined className="hero-contact-icon" />
                <div className="hero-contact-info">
                  <span className="hero-contact-label">Liên hệ</span>
                  <a href="tel:094612924" className="hero-contact-phone">
                    094612924 (Trung)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
