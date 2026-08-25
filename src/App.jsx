import React from 'react';
import './App.css';

// 家具数据列表：你可以把照片放在 public/images/ 目录下，并在 image 字段指定路径
const furnitureItems = [
  {
    id: 1,
    tag: 'Lounge Chair',
    title: '北极星单人休闲椅',
    desc: '采用高档棉麻面料与实木框架，兼具人体工学与优雅流线造型。',
    price: '¥ 2,880',
    image: '/images/chair-1.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    tag: 'Living Room',
    title: '云端模块化布艺沙发',
    desc: '超宽深坐垫设计，羽绒填充，给予身体全方位的松弛包裹感。',
    price: '¥ 8,990',
    image: '/images/sofa-1.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    tag: 'Dining Room',
    title: '北美FAS级白橡木餐桌',
    desc: '温润的天然木纹，边缘圆润打磨，承载温馨的家庭聚会时光。',
    price: '¥ 4,500',
    image: '/images/table-1.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    tag: 'Lighting',
    title: '留白极简艺术落地灯',
    desc: '柔和漫反射光效，勾勒空间层次，兼具雕塑感的现代照明艺术品。',
    price: '¥ 1,280',
    image: '/images/lamp-1.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    tag: 'Bedroom',
    title: '黑胡桃木悬浮双人床',
    desc: '轻盈的悬浮视觉设计，精选进口黑胡桃木，打造安稳沉静的睡眠空间。',
    price: '¥ 6,200',
    image: '/images/bed-1.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    tag: 'Storage',
    title: '日式木格栅多功能边柜',
    desc: '半透格栅门板，兼具透气与储物美学，完美融入各类客厅风格。',
    price: '¥ 3,600',
    image: '/images/cabinet-1.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80'
  }
];

export default function App() {
  const handleDetailClick = (title) => {
    alert(`已将 "${title}" 加入查看清单`);
  };

  return (
    <div className="app">
      {/* 顶部导航 */}
      <header className="header">
        <div className="logo">ARTISAN<span>.</span></div>
        <nav className="nav-links">
          <a href="#gallery">精选展厅</a>
          <a href="#spaces">空间系列</a>
          <a href="#about">关于我们</a>
          <a href="#contact">联系客服</a>
        </nav>
      </header>

      {/* 标语区 */}
      <section className="hero">
        <h1>质感生活，匠心呈现</h1>
        <p>探索我们精心设计的现代家具系列，为您的每一处空间注入自然、舒适与美学灵感。</p>
      </section>

      {/* 照片展示网格 */}
      <main className="container" id="gallery">
        <div className="gallery-grid">
          {furnitureItems.map((item) => (
            <div className="furniture-card" key={item.id}>
              <div className="image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  // 如果本地 public/images 还没有对应照片，自动降级展示网络占位图
                  onError={(e) => { e.target.src = item.fallbackImage; }} 
                />
              </div>
              <div className="card-content">
                <span className="tag">{item.tag}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
                <div className="card-footer">
                  <span className="price">{item.price}</span>
                  <button 
                    className="btn-detail" 
                    onClick={() => handleDetailClick(item.title)}
                  >
                    查看详情
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 页脚 */}
      <footer className="footer">
        <p>&copy; 2026 Artisan Living. All Rights Reserved. Designed with React.</p>
      </footer>
    </div>
  );
}