import React from 'react';
import './FloatingCharityButton.css';

interface FloatingCharityButtonProps {
  onClick: () => void;
}

const FloatingCharityButton: React.FC<FloatingCharityButtonProps> = ({ onClick }) => {
  return (
    <button className="floating-charity-btn" onClick={onClick} aria-label="🇻🇳 Điều ước tốt nghiệp của mình">
      <span className="btn-icon">🇻🇳</span>
      <span className="btn-text">Điều ước tốt nghiệp của mình</span>
    </button>
  );
};

export default FloatingCharityButton;
