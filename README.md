# 郭思思 - 个人作品展示网站

## 📖 项目简介

这是一个现代化的个人作品展示网站，采用响应式设计，展示物联网工程专业学生的技术项目和个人信息。网站具有优雅的毛玻璃效果、动态背景和流畅的交互体验。

## ✨ 主要特性

- 🎨 **现代化设计**：采用毛玻璃拟态设计风格，支持浅色主题
- 📱 **响应式布局**：完美适配桌面端和移动端设备
- 🚀 **流畅动画**：CSS动画和过渡效果，提升用户体验
- 🔍 **项目展示**：详细的项目介绍页面，支持图片轮播
- 📊 **技术栈展示**：可视化技术能力展示
- 🔗 **社交链接**：集成GitHub、CSDN、博客等社交平台
- 📄 **法律页面**：包含隐私政策和使用条款页面
- 🎯 **SEO优化**：完善的meta标签和语义化HTML结构

## 🛠️ 技术栈

### 前端技术
- **HTML5**：语义化标签，提升可访问性
- **CSS3**：Flexbox布局、CSS Grid、动画效果
- **JavaScript (ES6+)**：模块化开发，动态内容加载
- **Font Awesome**：图标库支持

### 设计特色
- **毛玻璃效果**：backdrop-filter实现现代化视觉效果
- **动态背景**：CSS渐变和动画营造科技感
- **响应式设计**：媒体查询适配不同屏幕尺寸
- **无障碍设计**：支持键盘导航和屏幕阅读器

## 📁 项目结构

```
d:\grwz/
├── index.html              # 主页面
├── project-detail.html     # 项目详情页面
├── privacy-policy.html     # 隐私政策页面
├── terms-of-use.html      # 使用条款页面
├── style.css              # 主样式文件
├── script.js              # 主页面脚本
├── project-detail.js      # 项目详情页面脚本
├── data.js                # 数据配置文件
├── images/                # 图片资源目录
│   └── lora-mcu.svg      # SVG图标文件
└── README.md              # 项目说明文档
```

## 🎯 展示项目

网站展示了10个技术项目，涵盖多个技术领域：

### Web开发项目
1. **Picture Perfect Scheduler** - 摄影预约平台 (Java Web)
2. **BMI健康助手** - 健康评估工具 (JavaScript)
3. **AI简历助手** - 智能简历制作平台 (Vue.js)

### 移动开发项目
4. **G-Note** - Android笔记应用 (Android/Java)

### 嵌入式/物联网项目
5. **超声波测距系统** - 基于STC89C52单片机
6. **温湿度采集系统** - 物联网+Android
7. **智慧农圃管理系统** - STM32+传感器
8. **LoRa水位监测系统** - STM32WLE5CCU6

### 桌面应用项目
9. **串口调试助手** - QT6/C++开发

### 3D/游戏开发项目
10. **BIM家装可视化应用** - Unreal Engine 5

## 🚀 快速开始

### 本地运行

1. **克隆项目**
   ```bash
   git clone [项目地址]
   cd grwz
   ```

2. **启动本地服务器**
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 或使用Node.js
   npx serve .
   
   # 或使用PHP
   php -S localhost:8000
   ```

3. **访问网站**
   打开浏览器访问 `http://localhost:8000`

### 部署到服务器

1. **上传文件**：将所有文件上传到Web服务器根目录
2. **配置域名**：确保域名正确指向服务器
3. **HTTPS配置**：建议配置SSL证书启用HTTPS

## ⚙️ 配置说明

### 个人信息配置

编辑 `data.js` 文件中的 `personalInfo` 对象：

```javascript
const personalInfo = {
    name: '你的姓名',
    title: '你的职位/专业',
    location: '你的位置',
    avatar: '头像图片URL',
    description: '个人简介'
};
```

### 项目数据配置

在 `data.js` 文件的 `projects` 数组中添加或修改项目信息：

```javascript
{
    id: 'project-id',
    title: '项目标题',
    description: '项目简介',
    image: '项目封面图片URL',
    projectInfo: {
        developmentTime: '开发时间',
        developer: '开发者',
        techStack: '技术栈'
    },
    details: {
        background: '项目背景',
        features: ['功能1', '功能2'],
        innovations: ['创新点1', '创新点2']
    }
}
```

### 样式自定义

在 `style.css` 文件中修改CSS变量来自定义主题：

```css
:root {
    --primary-color: #8b5cf6;      /* 主色调 */
    --secondary-color: #a855f7;    /* 次要色 */
    --accent-color: #06b6d4;       /* 强调色 */
    --text-primary: #1e293b;       /* 主文字色 */
    --text-secondary: #475569;     /* 次要文字色 */
}
```

## 📱 响应式设计

网站采用移动优先的响应式设计：

- **移动端** (< 768px)：单列布局，优化触摸交互
- **平板端** (768px - 1024px)：两列布局，适中的间距
- **桌面端** (> 1024px)：多列布局，完整功能展示

## 🔧 浏览器兼容性

- ✅ Chrome 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 88+
- ⚠️ IE 不支持（使用了现代CSS特性）

## 📈 性能优化

- **图片优化**：使用WebP格式，提供PNG备用
- **CSS优化**：合并样式文件，使用CSS变量
- **JavaScript优化**：模块化加载，避免阻塞渲染
- **字体优化**：使用CDN加载Font Awesome

## 🔒 隐私与安全

- **数据保护**：不收集任何用户个人信息
- **无Cookie**：网站不使用任何Cookie或跟踪技术
- **静态网站**：纯前端实现，无服务器端数据处理
- **HTTPS**：建议使用HTTPS协议保障传输安全

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 👤 作者信息

**郭思思**
- 专业：物联网工程
- GitHub: [@SisiGuo04](https://github.com/SisiGuo04)
- CSDN: [A_GandS](https://blog.csdn.net/A_GandS)
- 邮箱: [sisiguo.050126@outlook.com]

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进这个项目！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 📧 邮箱：[sisiguo.050126@outlook.com]
- 🐦 社交媒体：[https://myworks.guosisi.top/images/wxOfficialAccount.webp]

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
