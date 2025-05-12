// 页面加载完成后初始化功能
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    setupModals();
    initImages();
    
    // 设置当前年份
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

// 轮播图功能
let currentIndex = 0;
const slideCount = 7; // 轮播图总数

function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const dots = document.querySelectorAll('.dot');
    
    // 初始化轮播图位置
    updateCarousel();
    
    // 添加懒加载观察器
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const slide = entry.target;
                const img = slide.querySelector('img');
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(slide);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // 对每个轮播图添加观察
    slides.forEach(slide => {
        lazyLoadObserver.observe(slide);
    });
    
    // 预加载下一张图片
    function preloadNextImage() {
        const nextIndex = (currentIndex + 1) % slideCount;
        const nextSlide = slides[nextIndex];
        const nextImg = nextSlide.querySelector('img');
        if (nextImg.dataset.src) {
            const preloadImg = new Image();
            preloadImg.src = nextImg.dataset.src;
        }
    }
    
    // 下一张
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
        preloadNextImage();
    });
    
    // 上一张
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
        preloadNextImage();
    });
    
    // 点击导航点切换
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // 触摸滑动支持
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) { // 滑动距离大于50px时触发
            if (diff > 0) {
                currentIndex = (currentIndex + 1) % slideCount;
            } else {
                currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            }
            updateCarousel();
        }
    });
}

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const dots = document.querySelectorAll('.dot');
    
    // 更新轮播图位置
    track.style.transform = `translateX(-${currentIndex * (100 / slideCount)}%)`;
    
    // 更新导航点状态
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// 模态框功能
function setupModals() {
    const wechatBtn = document.getElementById('wechat-btn');
    const blogBtn = document.getElementById('blog-btn');
    const wechatModal = document.getElementById('wechat-modal');
    const blogModal = document.getElementById('blog-modal');
    const carouselModal = document.getElementById('carousel-modal');
    
    // 微信二维码弹窗
    setupModal(wechatBtn, wechatModal, 'wechat-close');
    
    // 博客弹窗
    setupModal(blogBtn, blogModal, 'blog-close');
    
    // 轮播图弹窗
    document.querySelectorAll('.carousel-slide').forEach(slide => {
        slide.addEventListener('click', () => {
            const modalImg = document.getElementById('carousel-modal-img');
            const modalTitle = document.getElementById('carousel-modal-title');
            const modalDesc = document.getElementById('carousel-modal-desc');
            
            modalImg.src = slide.querySelector('img').src;
            modalTitle.textContent = slide.querySelector('.slide-caption h3').textContent;
            modalDesc.textContent = slide.querySelector('.slide-caption p').textContent;
            
            showModal(carouselModal);
        });
    });
    
    // ESC键关闭所有弹窗
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideModal(wechatModal);
            hideModal(blogModal);
            hideModal(carouselModal);
        }
    });
}

function setupModal(trigger, modal, closeId) {
    if (!trigger || !modal) return;
    
    const closeBtn = document.getElementById(closeId);
    
    trigger.addEventListener('click', () => showModal(modal));
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => hideModal(modal));
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal(modal);
        }
    });
}

function showModal(modal) {
    if (!modal) return;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function hideModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// 图片加载错误处理
function handleImageError(img) {
    img.onerror = function() {
        // 尝试降级到其他格式
        if (img.src.endsWith('.webp')) {
            img.src = img.src.replace('.webp', '.png');
        } else if (img.src.endsWith('.png')) {
            img.src = img.src.replace('.png', '.jpg');
        }
    };
}

// 初始化图片加载
function initImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // 添加加载中的类
        img.classList.add('loading');
        
        // 图片加载完成后移除加载类
        img.onload = function() {
            img.classList.remove('loading');
            img.classList.add('loaded');
        };
        
        // 处理加载错误
        handleImageError(img);
        
        // 添加懒加载
        img.loading = 'lazy';
    });
}