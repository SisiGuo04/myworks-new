// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
});

// 初始化页面内容
function initializePage() {
    loadPersonalInfo();
    loadTechStack();
    loadSocialLinks();
    loadProjects();
    loadWechatQR();
    addFadeInAnimation();
}

// 加载个人信息
function loadPersonalInfo() {
    const nameElement = document.getElementById('profile-name');
    const titleElement = document.getElementById('profile-title-text');
    const locationElement = document.getElementById('profile-location-text');
    const descriptionElement = document.getElementById('profile-description');
    const avatarElement = document.getElementById('avatar-img');

    if (nameElement) nameElement.textContent = personalInfo.name;
    if (titleElement) titleElement.textContent = personalInfo.title;
    if (locationElement) locationElement.textContent = personalInfo.location;
    
    // 为关于我的文本添加图标和结构化显示
    if (descriptionElement) {
        const paragraphs = personalInfo.description.split('\n\n');
        const icons = [
            'fas fa-graduation-cap', // 教育背景
            'fas fa-briefcase', // 实习经历
            'fas fa-brain', // 自学能力
            'fas fa-cogs' // 工程能力
        ];
        
        descriptionElement.innerHTML = paragraphs.map((paragraph, index) => {
            if (paragraph.trim()) {
                const icon = icons[index] || 'fas fa-circle';
                return `<div class="about-paragraph"><i class="${icon}"></i><span>${paragraph.trim()}</span></div>`;
            }
            return '';
        }).join('');
    }
    
    if (avatarElement) {
        avatarElement.src = personalInfo.avatar;
        avatarElement.onerror = function() {
            this.src = personalInfo.avatarFallback;
        };
        // 设置头像的alt属性
        avatarElement.alt = personalInfo.name + '的头像';
    }
}

// 加载技术栈
function loadTechStack() {
    const techStackContainer = document.getElementById('tech-stack');
    if (!techStackContainer) return;

    techStackContainer.innerHTML = '';
    
    techStack.forEach(tech => {
        const techItem = document.createElement('div');
        techItem.className = 'tech-item';
        techItem.innerHTML = `
            <i class="${tech.icon}"></i>
            <span>${tech.name}</span>
        `;
        techStackContainer.appendChild(techItem);
    });
}

// 加载社交媒体链接
function loadSocialLinks() {
    const socialLinksContainer = document.getElementById('social-links');
    if (!socialLinksContainer) return;

    socialLinksContainer.innerHTML = '';
    
    socialLinks.forEach(social => {
        const socialElement = social.url === '#' ? 
            document.createElement('button') : 
            document.createElement('a');
        
        socialElement.className = 'social-icon';
        if (social.id) socialElement.id = social.id;
        if (social.url !== '#') {
            socialElement.href = social.url;
            socialElement.target = '_blank';
        }
        socialElement.title = social.name;
        
        socialElement.innerHTML = `
            <i class="${social.icon}"></i>
            <span>${social.name}</span>
            ${social.tooltip ? `<div class="tooltip">${social.tooltip}</div>` : ''}
        `;
        
        socialLinksContainer.appendChild(socialElement);
    });
}

// 加载微信二维码配置
function loadWechatQR() {
    const titleElement = document.getElementById('wechat-qr-title');
    const imageElement = document.getElementById('wechat-qr-image');
    const descriptionElement = document.getElementById('wechat-qr-description');

    if (titleElement) titleElement.textContent = wechatQR.title;
    if (descriptionElement) descriptionElement.textContent = wechatQR.description;
    
    if (imageElement) {
        imageElement.src = wechatQR.image;
        imageElement.onerror = function() {
            this.src = wechatQR.fallback;
        };
    }
}

// 加载项目列表
function loadProjects() {
    const projectsContainer = document.getElementById('projects-grid');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-project-id', project.id);
        
        projectCard.innerHTML = `
            <img src="${project.thumbnail}" alt="${project.title}" class="project-image" loading="lazy">
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        `;
        
        // 添加点击事件
        projectCard.addEventListener('click', () => {
            navigateToProject(project.id);
        });
        
        projectsContainer.appendChild(projectCard);
    });
}

// 跳转到项目详情页
function navigateToProject(projectId) {
    // 将项目ID存储到URL参数中
    const url = `project-detail.html?id=${projectId}`;
    window.location.href = url;
}

// 设置事件监听器
function setupEventListeners() {
    // 微信公众号按钮点击事件
    const wechatBtn = document.getElementById('wechat-btn');
    if (wechatBtn) {
        wechatBtn.addEventListener('click', showWechatModal);
    }
    
    // 博客按钮点击事件
    const blogBtn = document.getElementById('blog-btn');
    if (blogBtn) {
        blogBtn.addEventListener('click', () => {
            alert('博客功能即将上线，敬请期待！');
        });
    }
    
    // 模态框关闭事件
    setupModalEvents();
    
    // 图片懒加载
    setupLazyLoading();
    
    // 滚动动画
    setupScrollAnimations();
}

// 显示微信二维码模态框
function showWechatModal() {
    const modal = document.getElementById('wechat-modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// 设置模态框事件
function setupModalEvents() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.close');
        
        // 关闭按钮点击事件
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }
        
        // 点击模态框外部关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });
}

// 设置图片懒加载
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// 设置滚动动画
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.glass-card, .project-card');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(el => animationObserver.observe(el));
}

// 添加淡入动画
function addFadeInAnimation() {
    const elements = document.querySelectorAll('.profile-card, .about-section, .tech-section, .social-section, .projects-section');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in');
        }, index * 100);
    });
}

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 工具函数：节流
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 平滑滚动到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面发生错误:', e.error);
});

// 页面可见性变化处理
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '👋 欢迎回来 - 郭思思';
    } else {
        document.title = '郭思思 - 个人作品展示';
    }
});