import { ClockCircleOutlined, CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './EventDetails.css';

const EventDetails = () => {
  return (
    <div className="event-details-grid">
      <div className="event-card">
        <ClockCircleOutlined className="event-icon" />
        <div className="event-text">
          <h2 className="event-title">Thời Gian</h2>
          <p className="event-description">11:00 - 12:30 Trưa</p>
        </div>
      </div>
      <div className="event-card">
        <CalendarOutlined className="event-icon" />
        <div className="event-text">
          <h2 className="event-title">Ngày Diễn Ra</h2>
          <p className="event-description">Thứ Bảy, 06 tháng 12, 2025</p>
        </div>
      </div>
      <div className="event-card">
        <EnvironmentOutlined className="event-icon" />
        <div className="event-text">
          <h2 className="event-title">Địa Điểm</h2>
          <p className="event-description">
            <a href="https://maps.app.goo.gl/9xRg25Nk4fwTYtaHA" target="_blank" rel="noopener noreferrer">
            Trường Đại học Khoa học tự nhiên, Đại học Quốc gia Thành phố Hồ Chí Minh (Cơ sở 1)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
