import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import './CountdownTimer.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET_DATE = dayjs('2025-12-06 11:00:00'); // Graduation date

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = dayjs();
      const diff = TARGET_DATE.diff(now);

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft());
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-grid">
        <div className="countdown-item">
          <div className="countdown-box">
            <p className="countdown-number days">{timeLeft.days}</p>
          </div>
          <div className="countdown-label">
            <p>Ngày</p>
          </div>
        </div>
        <div className="countdown-item">
          <div className="countdown-box">
            <p className="countdown-number hours">{timeLeft.hours}</p>
          </div>
          <div className="countdown-label">
            <p>Giờ</p>
          </div>
        </div>
        <div className="countdown-item">
          <div className="countdown-box">
            <p className="countdown-number minutes">{timeLeft.minutes}</p>
          </div>
          <div className="countdown-label">
            <p>Phút</p>
          </div>
        </div>
        <div className="countdown-item">
          <div className="countdown-box">
            <p className="countdown-number seconds">{timeLeft.seconds}</p>
          </div>
          <div className="countdown-label">
            <p>Giây</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
