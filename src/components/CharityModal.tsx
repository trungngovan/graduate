import React, { useEffect } from 'react';
import './CharityModal.css';

interface CharityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CharityModal: React.FC<CharityModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="charity-modal-overlay" onClick={onClose}>
      <div className="charity-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="charity-modal-close" onClick={onClose}>×</button>
        
        <div className="charity-modal-header">
            <h2>Món quà tốt nghiệp ý nghĩa nhất ✨</h2>
        </div>

        <div className="charity-modal-body">
            <p className="charity-message">
                Sự hiện diện của bạn trong ngày tốt nghiệp đã là món quà vô giá với mình rồi. 
                <br/>
                <br/>
                Thay vì hoa hay quà, mình xin phép được biến sự yêu thương đó thành những phần đóng góp, gửi gắm hơi ấm đến đồng bào đang gặp khó khăn trong đợt bão lũ vừa qua. 
                Cùng mình lan tỏa niềm vui này theo cách thật đặc biệt nhé! 💖
            </p>

            <p className="qr-instruction">
                Mọi đóng góp nhỏ xin vui lòng thực hiện qua mã QR dưới đây:
            </p>

            <div className="qr-container">
                <img src="/QR.png" alt="QR Code ủng hộ" className="qr-image" />
            </div>

            <p className="charity-thank-you">
                Xin chân thành cảm ơn tấm lòng nhân ái của bạn! Sự sẻ chia này khiến niềm vui tốt nghiệp của mình trọn vẹn hơn rất nhiều. 🌻
            </p>
        </div>
      </div>
    </div>
  );
};

export default CharityModal;
