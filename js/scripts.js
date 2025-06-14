document.addEventListener('DOMContentLoaded', function() {
  // AOS 初始化
  if (window.AOS) {
    AOS.init({ duration: 600, once: true });
  }

  // Splide 轮播初始化
  if (window.Splide) {
    new Splide('#reason-slider', {
      type: 'loop',
      perPage: 3,
      gap: '1rem',
      autoplay: true,
      pauseOnHover: true,
      breakpoints: {
        768: { perPage: 1 }
      }
    }).mount();
  }

  // 移动端导航切换
  var toggle = document.querySelector('.p-globalnav__toggle');
  var mobileNav = document.querySelector('.p-globalnav__nav--mobile');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function() {
      mobileNav.classList.toggle('is-open');
      this.classList.toggle('is-active');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // …已有 AOS、Splide、移动端菜单切换…

  // —— 回到顶部按钮逻辑 —— 
  const scrollBtn = document.querySelector('.c-scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.add('is-visible');
      } else {
        scrollBtn.classList.remove('is-visible');
      }
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});


// Splide 产品轮播
if (window.Splide) {
  new Splide('#product-slider', {
    type: 'loop',
    perPage: 3,
    gap: '1rem',
    autoplay: true,
    breakpoints: { 768: { perPage: 1 } }
  }).mount();
}

// 简单表单验证
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    const email = form.querySelector('[name="email"]');
    if (!email.value.includes('@')) {
      e.preventDefault();
      alert('请输入有效的邮箱地址');
    }
  });
}
