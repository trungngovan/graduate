import { useState } from 'react';
import { Carousel } from 'antd';
import './MemoriesCarousel.css';

const MEMORIES = [
  {
    id: 1,
    title: 'Ngày nhập học',
    tone: 'sunset',
    caption: 'Những ngày đầu bước chân vào đại học, những người bạn đầu tiên, những kỷ niệm đầu tiên...',
  },
  {
    id: 2,
    title: 'Đội bóng chuyền',
    tone: 'cobalt',
    caption: 'Kỷ niệm tham gia đội tuyển bóng chuyền của trường...',
  },
  {
    id: 3,
    title: 'Học quân sự',
    tone: 'forest',
    caption: 'Những buổi học quân sự đáng nhớ...',
  },
  {
    id: 4,
    title: 'Học quân sự',
    tone: 'forest',
    caption: 'Học quân sự nữa nè...',
  },
  {
    id: 5,
    title: 'Giải bóng chuyền ĐHQG',
    tone: 'ember',
    caption: 'Cùng đội tham gia giải của ĐHQG nè...',
  },
  {
    id: 6,
    title: 'Band nhạc Hồ Bán Nguyệt KTX khu B',
    tone: 'violet',
    caption: 'Band nhạc Hồ Bán Nguyệt KTX khu B mãi đỉnh...',
  },
  {
    id: 7,
    title: 'Game Hackathon',
    tone: 'cobalt',
    caption: 'Tham gia Game Hackathon của UIT nè, team gánh còng lưng...',
  },
  {
    id: 8,
    title: 'Những người bạn cùng khoa',
    tone: 'sage',
    caption: 'Những người bạn, người học trò trong khoa Toán nè, cảm ơn vì ngày sinh nhật đó...',
  },
  {
    id: 9,
    title: 'Band nhạc KTX khu B',
    tone: 'violet',
    caption: 'Vẫn là band nhạc KTX khu B...',
  },
  {
    id: 10,
    title: 'Team Python',
    tone: 'cobalt',
    caption: 'Những người bạn, người anh trong team Python công ty S, cảm ơn mọi người rất nhiều...',
  },
  {
    id: 11,
    title: 'Band nhạc KTX khu B lần 3',
    tone: 'violet',
    caption: 'Cái gì kỉ niệm, nhắc lại 3 lần, band nhạc KTX lần 3...',
  },
  {
    id: 12,
    title: 'Sinh hoạt công dân',
    tone: 'amber',
    caption: 'Những lần sinh hoạt công dân cuối cùng của thời sinh viên...',
  },
  {
    id: 13,
    title: 'Phòng 722 KTX',
    tone: 'sage',
    caption: 'Anh em phòng 722 KTX khu B nè, sống chung phòng với nhau gần 4 năm trời, nhớ anh em quá...',
  },
  {
    id: 14,
    title: 'Bảo vệ luận án',
    tone: 'gold',
    caption: 'Sau bao nhiều cố gắng, đây là lúc bảo vệ luận án cuối cùng của mình...',
  },
];

const MemoriesCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const stackPreview = [1, 2].map((offset) => MEMORIES[(activeSlide + offset) % MEMORIES.length]);

  return (
    <section className="memories-section">
      <div className="memories-header">
        <p className="memories-eyebrow">Nhật ký HCMUS · 2021-2025</p>
        <h2 className="memories-title">Ký ức đại học qua từng khung ảnh</h2>
        <p className="memories-subtitle">
          Hành trình bốn năm đại học của mình được ghi lại qua những khoảnh khắc đáng nhớ, từ ngày nhập học
          đến những kỷ niệm cùng bạn bè và những thành tựu đạt được.
        </p>
      </div>

      <div className="memories-stage">
        <div className="memories-stack" aria-hidden="true">
          {stackPreview.map((memory, index) => (
            <div key={memory.id} className={`stack-card stack-card-${index + 1}`}>
              <img src={`/images/memories/${memory.id}.jpeg`} alt="" />
              <div className="stack-card-overlay" />
              <div className="stack-card-title">{memory.title}</div>
            </div>
          ))}
        </div>

        <div className="memories-carousel-wrapper cinematic-frame">
          <div className="frame-glow" />
          <Carousel
            autoplay
            autoplaySpeed={4000}
            speed={1200}
            dots={{ className: 'custom-dots' }}
            effect="fade"
            pauseOnHover
            beforeChange={(_, next) => setActiveSlide(next)}
          >
            {MEMORIES.map((memory) => (
              <div key={memory.id} className="carousel-slide">
                <div className={`memory-frame tone-${memory.tone}`}>
                  <div className="memory-visual">
                    <div className="memory-film-grain" />
                    <img
                      src={`/images/memories/${memory.id}.jpeg`}
                      alt={memory.caption}
                      className="memory-image"
                    />
                  </div>
                  <div className="memory-caption-panel">
                    <h3>{memory.title}</h3>
                    <p>{memory.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MemoriesCarousel;
