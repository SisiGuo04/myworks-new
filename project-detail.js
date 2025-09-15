// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeProjectDetail();
    setupEventListeners();
});

// 初始化项目详情页
function initializeProjectDetail() {
    const projectId = getProjectIdFromUrl();
    if (projectId) {
        loadProjectDetail(projectId);
    } else {
        showError('未找到项目信息');
    }
    addFadeInAnimation();
}

// 从URL获取项目ID
function getProjectIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// 加载项目详情
function loadProjectDetail(projectId) {
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
        showError('项目不存在');
        return;
    }
    
    // 更新页面标题
    document.title = `${project.title} - 郭思思`;
    document.getElementById('page-title').textContent = `${project.title} - 郭思思`;
    
    // 加载基本信息
    loadBasicInfo(project);
    
    // 加载项目信息
    if (project.projectInfo) {
        loadProjectInfo(project.projectInfo);
    }
    
    // 加载详细信息（如果存在）
    if (project.details) {
        loadDetailedInfo(project.details);
    } else {
        // 如果没有详细信息，只显示基本信息
        showGeneralInfo();
    }
}

// 加载基本项目信息
function loadBasicInfo(project) {
    const titleElement = document.getElementById('project-title');
    const descriptionElement = document.getElementById('project-description');
    const imageElement = document.getElementById('project-image');
    
    if (titleElement) titleElement.textContent = project.title;
    if (descriptionElement) descriptionElement.textContent = project.description;
    if (imageElement) {
        imageElement.src = project.image;
        imageElement.alt = project.title;
        
        // 图片加载错误处理
        imageElement.onerror = function() {
            this.src = project.thumbnail;
        };
    }
}

// 加载项目信息
function loadProjectInfo(projectInfo) {
    const generalInfoSection = document.getElementById('general-info');
    if (generalInfoSection && projectInfo) {
        const metaItems = generalInfoSection.querySelectorAll('.meta-item span');
        if (metaItems.length >= 3) {
            if (projectInfo.developmentTime) {
                metaItems[0].textContent = `开发时间：${projectInfo.developmentTime}`;
            }
            if (projectInfo.developer) {
                metaItems[1].textContent = `开发者：${projectInfo.developer}`;
            }
            if (projectInfo.techStack) {
                metaItems[2].textContent = `技术栈：${projectInfo.techStack}`;
            }
        }
    }
}

// 加载详细信息
function loadDetailedInfo(details) {
    const contentArea = document.getElementById('project-content-area');
    const contentContainer = document.getElementById('project-detailed-content');
    
    if (!contentArea || !contentContainer) return;
    
    contentContainer.innerHTML = '';
    
    // 创建内容片段
    const fragment = document.createDocumentFragment();
    
    // 添加背景信息
    if (details.background) {
        const backgroundP = document.createElement('p');
        backgroundP.textContent = details.background;
        backgroundP.style.marginBottom = '20px';
        fragment.appendChild(backgroundP);
    }
    
    // 添加市场现状
    if (details.market) {
        const marketP = document.createElement('p');
        marketP.textContent = details.market;
        marketP.style.marginBottom = '20px';
        fragment.appendChild(marketP);
    }
    
    // 添加功能特性
    if (details.features && details.features.length > 0) {
        const featuresDiv = document.createElement('div');
        featuresDiv.style.marginBottom = '20px';
        
        const featuresList = document.createElement('ul');
        featuresList.className = 'features-list';
        details.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        featuresDiv.appendChild(featuresList);
        fragment.appendChild(featuresDiv);
    }
    
    // 添加创新点
    if (details.innovations && details.innovations.length > 0) {
        const innovationsDiv = document.createElement('div');
        innovationsDiv.style.marginBottom = '20px';
        
        const innovationsList = document.createElement('ul');
        innovationsList.className = 'features-list';
        details.innovations.forEach(innovation => {
            const li = document.createElement('li');
            li.textContent = innovation;
            innovationsList.appendChild(li);
        });
        
        innovationsDiv.appendChild(innovationsList);
        fragment.appendChild(innovationsDiv);
    }
    
    // 在文章最后添加所有图片，纵向排列
    if (details.images && details.images.length > 0) {
        const imagesDiv = document.createElement('div');
        imagesDiv.className = 'project-gallery';
        imagesDiv.style.margin = '30px 0';
        imagesDiv.style.display = 'flex';
        imagesDiv.style.flexDirection = 'column';
        imagesDiv.style.gap = '15px';
        
        details.images.forEach((imageSrc, index) => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = `项目图片 ${index + 1}`;
            img.className = 'gallery-image';
            img.loading = 'lazy';
            img.style.width = '100%';
            img.style.maxWidth = '800px';
            img.style.height = 'auto';
            img.style.alignSelf = 'center';
            
            // 添加点击预览功能
            img.addEventListener('click', () => {
                showImageModal(imageSrc, img.alt);
            });
            
            // 图片加载错误处理
            img.onerror = function() {
                this.style.display = 'none';
            };
            
            imagesDiv.appendChild(img);
        });
        
        fragment.appendChild(imagesDiv);
    }
    
    contentContainer.appendChild(fragment);
    contentArea.style.display = 'block';
}

// 显示通用项目信息
function showGeneralInfo() {
    const generalInfo = document.getElementById('general-info');
    if (generalInfo) {
        generalInfo.style.display = 'block';
    }
}

// 显示图片预览模态框
function showImageModal(imageSrc, imageAlt) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    
    if (modal && modalImage) {
        modalImage.src = imageSrc;
        modalImage.alt = imageAlt;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 模态框关闭事件
    setupModalEvents();
    
    // 返回按钮事件
    setupBackButton();
    
    // 图片懒加载
    setupLazyLoading();
    
    // 滚动动画
    setupScrollAnimations();
}

// 设置返回按钮
function setupBackButton() {
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 检查是否有历史记录
            if (window.history.length > 1) {
                window.history.back();
            } else {
                // 如果没有历史记录，直接跳转到首页
                window.location.href = 'index.html';
            }
        });
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
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// 设置滚动动画
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.content-section, .project-header');
    
    if ('IntersectionObserver' in window) {
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
}

// 添加淡入动画
function addFadeInAnimation() {
    const elements = document.querySelectorAll('.project-header, .content-section');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in');
        }, index * 100);
    });
}

// 显示错误信息
function showError(message) {
    const container = document.querySelector('.container');
    if (container) {
        container.innerHTML = `
            <div class="error-message" style="
                background: var(--glass-bg);
                backdrop-filter: blur(16px);
                -webkit-backdrop-filter: blur(16px);
                border-radius: var(--border-radius);
                border: 1px solid var(--glass-border);
                box-shadow: var(--shadow-light);
                padding: 40px;
                text-align: center;
                margin-top: 50px;
            ">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #ffc107; margin-bottom: 20px;"></i>
                <h2 style="margin-bottom: 15px; color: var(--text-primary);">${message}</h2>
                <p style="color: var(--text-secondary); margin-bottom: 25px;">请检查URL或返回首页</p>
                <a href="index.html" class="back-btn" style="
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px 24px;
                    background: var(--glass-bg);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border-radius: var(--border-radius);
                    border: 1px solid var(--glass-border);
                    text-decoration: none;
                    color: var(--text-primary);
                    transition: var(--transition);
                    font-weight: 500;
                ">
                    <i class="fas fa-home"></i>
                    <span>返回首页</span>
                </a>
            </div>
        `;
    }
}

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面发生错误:', e.error);
});

// 页面可见性变化处理
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '👋 欢迎回来 - 项目详情';
    } else {
        const projectId = getProjectIdFromUrl();
        const project = projects.find(p => p.id === projectId);
        if (project) {
            document.title = `${project.title} - 郭思思`;
        }
    }
});