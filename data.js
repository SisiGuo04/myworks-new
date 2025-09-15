// 个人信息数据
const personalInfo = {
    name: '郭思思',
    title: '物联网工程专业本科生',
    location: '徐州，江苏，中国🇨🇳',
    avatar: 'https://myworks.guosisi.top/images/picture.jpg',
    avatarFallback: 'picture.jpg',
    description: `物联网工程专业学生，专注于嵌入式系统开发和前端技术研究。

曾在科技公司实习，参与智能硬件产品开发，负责嵌入式系统设计和前端界面开发，获得了宝贵的工业级项目经验。

具备强大的技术自学能力，能够快速掌握新技术栈并应用到实际项目中，从零基础自学STM32开发到独立完成复杂传感器系统集成。

具备优秀的工程实现能力，能够独立完成从需求分析到系统部署的完整开发流程，注重代码质量和系统稳定性。`
};

// 技术栈数据
const techStack = [
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Spring Boot', icon: 'fas fa-leaf' },
    { name: 'Vue.js', icon: 'fab fa-vuejs' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Tomcat', icon: 'fa-solid fa-cat' },
    { name: 'Linux', icon: 'fa-brands fa-linux' },
    { name: 'C语言', icon: 'fa-solid fa-c' },
    { name: 'STM32', icon: 'fa-solid fa-gears' }
];

// 社交媒体链接
const socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/SisiGuo04', tooltip: '即将跳转到 GitHub' },
    { name: 'CSDN', icon: 'fas fa-code', url: 'https://blog.csdn.net/A_GandS', tooltip: '即将跳转到 CSDN' },
    { name: '博客', icon: 'fas fa-blog', url: '#', tooltip: '即将跳转到 博客', id: 'blog-btn' },
    { name: '公众号', icon: 'fab fa-weixin', url: '#', tooltip: '', id: 'wechat-btn' }
];

// 公众号二维码配置
const wechatQR = {
    image: 'https://myworks.guosisi.top/images/wxOfficialAccount.webp',
    fallback: 'wechat-qr.jpg',
    title: '关注我的公众号',
    description: '扫描二维码关注公众号'
};

// 项目数据
const projects = [
    {
        id: 'project1',
        title: 'Picture Perfect Scheduler：一站式摄影预约平台',
        description: '一站式摄影预约平台，满足用户个性化摄影服务需求',
        image: 'https://myworks.guosisi.top/images/pps.gif',
        thumbnail: 'https://myworks.guosisi.top/images/pps.webp',
        projectInfo: {
            developmentTime: '2023-2024',
            developer: '郭思思',
            techStack: 'Java Web、JSP、JavaScript、Tomcat、MySql、Servlet'
        },
        details: {
            background: '社交媒体时代，人们对摄影需求增加。智能手机普及，但高质量照片仍需专业摄影师。Picture Perfect Scheduler 提供便捷的摄影师预约平台，满足用户个性化摄影需求。',
            market: '主流产品：豆瓣摄影（适合摄影爱好者）、摄会社（适合专业摄影服务）。现有平台界面陈旧，更新缓慢，无法满足普通群众的约拍需求。Picture Perfect Scheduler 的目标是填补这一市场空白。',
            features: [
                '用户注册登录：通过手机号或邮箱注册，完善信息',
                '浏览摄影作品：搜索和浏览摄影师作品，了解风格',
                '预约摄影师：选择摄影师、时间和地点',
                '确认预约：摄影师确认需求，与用户沟通',
                '拍摄服务：摄影师按预约拍摄，保证质量',
                '完成作品：后期处理后上传平台，用户可查看和下载'
            ],
            innovations: [
                '一站式服务：用户可在平台上完成全流程操作',
                '手机自适应：支持手机浏览器访问',
                '即时约拍：优化摄影师与客户匹配，提高效率',
                '预约管理：用户可查看和管理预约信息'
            ],
            images: [
                'https://myworks.guosisi.top/images/pps-jpfxt.webp',
                'https://myworks.guosisi.top/images/pps-ywlct.webp',
                'https://myworks.guosisi.top/images/pps-sjkert.webp',
                'https://myworks.guosisi.top/images/pps-gzlct.webp'
            ]
        }
    },
    {
        id: 'project2',
        title: 'BMI健康助手',
        description: '基于Web的交互式健康评估工具，提供BMI、体脂率等多项健康指标计算和个性化建议。',
        image: 'https://myworks.guosisi.top/images/bmi.gif',
        thumbnail: 'https://myworks.guosisi.top/images/bmi.webp',
        projectInfo: {
            developmentTime: '2024',
            developer: '郭思思',
            techStack: 'JavaScript, HTML5, CSS3'
        },
        details: {
            background: 'BMI健康助手是一个基于Web的交互式工具，用于评估用户的身体健康状况。通过收集用户的身高、体重、年龄和性别信息，计算BMI、体脂率、基础代谢率和理想体重等多项健康指标，并根据计算结果提供个性化的健康建议。',
            market: '随着人们健康意识的提高，个人健康管理工具需求增长。现有工具功能单一，用户体验不佳。BMI健康助手提供全面的健康指标计算和个性化建议。',
            features: [
                '用户输入验证：实时验证数据有效性',
                '健康指标计算：提供BMI分类、体脂率计算等',
                '可视化结果展示：通过直观的健康风险进度条显示不同风险等级',
                '个性化健康建议：根据BMI分类提供饮食和运动指导'
            ],
            innovations: [
                '纯JavaScript实现：无依赖库',
                '医学认可算法：采用医学认可的算法公式',
                '优秀用户体验：提供优秀的用户体验'
            ],
            images: [
                'https://myworks.guosisi.top/images/bmi.webp'
            ],
            projectUrl: 'http://bmi.guosisi.top/'
        }
    },
    {
        id: 'project3',
        title: 'AI简历助手：智能简历制作平台',
        description: '基于Web的智能简历制作工具，集成AI技术，提供专业简历模板和自动内容生成功能,为GitHub开源项目部署练习。',
        image: 'https://myworks.guosisi.top/images/ai-resume.gif',
        thumbnail: 'https://myworks.guosisi.top/images/ai-resume.png',
        projectInfo: {
            developmentTime: '2024',
            developer: '郭思思',
            techStack: 'Vue.js, Ant Design Vue, Node.js, Express, MongoDB'
        },
        details: {
            background: 'AI简历助手是一个基于Web的简历制作平台，旨在帮助用户快速生成专业且个性化的简历。通过集成人工智能技术，该平台能够根据用户输入的信息自动生成简历内容，并提供多种模板供用户选择和定制。',
            market: '求职市场竞争激烈，优质简历制作需求增长。传统简历制作工具功能有限，AI简历助手通过智能技术提供个性化简历制作服务。',
            features: [
                '智能生成：利用AI技术自动生成简历内容',
                '多模板选择：提供多种简历模板',
                '移动端适配：已对移动端进行优化',
                '实时预览：编辑时实时预览效果',
                '数据安全：确保用户信息本地处理'
            ],
            innovations: [
                'AI技术集成：结合自然语言处理技术',
                '前后端分离架构：采用现代Web开发框架',
                'Docker容器化部署：支持跨平台运行'
            ],
            images: [
                'https://myworks.guosisi.top/images/ai-resume.png'
            ],
            projectUrl: 'http://182.92.233.39:520/'
        }
    },
    {
        id: 'project4',
        title: 'G-Note：基于Android的笔记APP',
        description: '一款功能完整的 Android 笔记应用，支持文本与图片笔记、社交广场等功能',
        image: 'https://myworks.guosisi.top/images/gnote.gif',
        thumbnail: 'https://myworks.guosisi.top/images/gnote.gif',
        projectInfo: {
            developmentTime: '2024',
            developer: '郭思思',
            techStack: 'Android Studio, Java, SQLite, ROOM, Glide, Material Design'
        },
        details: {
            background: 'G-Note 是一款基于 Android 平台的移动笔记应用，为用户提供简洁、高效的笔记记录与管理工具。该应用支持文本输入、图片插入、文章编辑与删除等功能，并设计了用户友好的界面，帮助用户随时随地记录灵感、整理事务。',
            market: '移动笔记应用市场需求旺盛，用户需要简洁高效的记录工具。G-Note提供完整的笔记管理和社交功能，满足用户多样化需求。',
            features: [
                '用户认证系统：支持用户注册、登录、忘记密码和修改密码功能',
                '笔记管理：支持用户笔记列表展示和笔记编辑',
                '社交广场：允许用户浏览其他用户分享的文章',
                '图片支持：支持文本和图片笔记'
            ],
            innovations: [
                'Material Design设计：采用现代化设计原则',
                'ROOM框架：简化数据库操作',
                'Glide图片加载：优化图片加载性能'
            ],
            images: [
                'https://myworks.guosisi.top/images/gnote/欢迎.png',
                'https://myworks.guosisi.top/images/gnote/登录.png',
                'https://myworks.guosisi.top/images/gnote/注册.png',
                'https://myworks.guosisi.top/images/gnote/用户笔记列表.png',
                'https://myworks.guosisi.top/images/gnote/用户添加或修改文章.png'
            ]
        }
    },
    {
        id: 'project5',
        title: '基于单片机的超声波测距系统',
        description: '使用 STC89C52 单片机和 HC-SR04 超声波传感器实现的智能测距系统，可应用于工业自动化和智能家居场景',
        image: 'https://myworks.guosisi.top/images/csbcjxt/cover.webp',
        thumbnail: 'https://myworks.guosisi.top/images/csbcjxt/cover.webp',
        projectInfo: {
            developmentTime: '2024',
            developer: '郭思思',
            techStack: 'STC89C52单片机, HC-SR04传感器, LCD1602, C语言, Keil μVision 5, Proteus'
        },
        details: {
            background: '本项目设计并实现了一个基于 STC89C52 单片机的超声波测距系统，通过超声波传感器 HC-SR04 测量目标物体的距离，并将结果实时显示在 LCD 屏幕上。系统具备阈值设置功能，当测量距离小于设定阈值时，触发蜂鸣器和 LED 灯报警。',
            market: '智能测距系统在工业自动化、智能家居、安防监控等领域需求广泛。本系统提供低成本、高精度的测距解决方案。',
            features: [
                '实时测距：使用HC-SR04超声波传感器进行精确测距',
                '阈值设置：可设定距离阈值触发报警',
                '数据显示：LCD1602液晶屏实时显示测距结果',
                '报警提示：蜂鸣器和LED灯组成的报警系统'
            ],
            innovations: [
                '超声波时间差测距：基于声波传播时间计算距离',
                '智能报警机制：距离小于阈值时自动报警',
                '高精度测量：测量精度误差控制在1-5cm范围内'
            ],
            images: [
                'https://myworks.guosisi.top/images/csbcjxt/超声波传感器实物和仿真图.png',
                'https://myworks.guosisi.top/images/csbcjxt/报警模块仿真图.png',
                'https://myworks.guosisi.top/images/csbcjxt/系统功能图.png',
                'https://myworks.guosisi.top/images/csbcjxt/最小系统原理图.png',
                'https://myworks.guosisi.top/images/csbcjxt/结果1.png'
            ]
        }
    },
    {
        id: 'project6',
        title: '基于物联网和Android的温湿度采集系统',
        description: '利用DHT11传感器和CC2541蓝牙模块实现的智能温湿度监测系统，支持实时数据采集、可视化显示及历史记录查看',
        image: 'https://myworks.guosisi.top/images/iot-android-temp/cover.png',
        thumbnail: 'https://myworks.guosisi.top/images/iot-android-temp/cover.png',
        projectInfo: {
            developmentTime: '2024',
            developer: '郭思思',
            techStack: 'Android, DHT11传感器, CC2541蓝牙模块, SQLite数据库'
        },
        details: {
            background: '本项目设计并实现了一个基于物联网和Android平台的温湿度采集系统，通过DHT11传感器实时监测环境温湿度数据，并利用蓝牙技术将数据传输至Android设备进行可视化展示。',
            market: '智能环境监测系统在农业、工业、家居等领域应用广泛。本系统提供低成本、高精度的温湿度监测解决方案。',
            features: [
                '实时数据采集：使用DHT11传感器采集环境数据（温度范围：-20~60℃，精度±2℃；湿度范围：5~95%RH，精度±5%RH）',
                '蓝牙数据传输：通过CC2541蓝牙模块实现低功耗无线数据传输',
                'Android应用：提供友好的用户界面，包括欢迎页面、设备搜索、用户登录和注册等功能',
                '数据存储：采用专业的数据表设计，确保数据的完整性和安全性'
            ],
            innovations: [
                '物联网架构：传感器层、数据传输层和应用层的清晰架构',
                '低功耗蓝牙：CC2541模块实现高效数据传输',
                '实时同步：Android端与硬件数据同步误差≤1秒'
            ],
            images: [
                'https://myworks.guosisi.top/images/iot-android-temp/系统架构图.png',
                'https://myworks.guosisi.top/images/iot-android-temp/系统总体流程图.png',
                'https://myworks.guosisi.top/images/iot-android-temp/软件欢迎页.png',
                'https://myworks.guosisi.top/images/iot-android-temp/硬件设备图.png'
            ]
        }
    },
    {
        id: 'project7',
        title: '基于BIM和UE5的家装流程可视化应用',
        description: '本项目基于虚幻引擎5（Unreal Engine 5）开发了一个家装流程可视化应用',
        image: 'https://myworks.guosisi.top/images/ue5/enter-app.png',
        thumbnail: 'https://myworks.guosisi.top/images/ue5/enter-app.png',
        projectInfo: {
            developmentTime: '2024',
            developer: '郭思思',
            techStack: 'Unreal Engine 5.1, C++, 蓝图, 3ds Max '
        },
        details: {
            background: '本项目基于虚幻引擎5开发了一个家装流程可视化应用，通过高质量的三维建模和实时渲染技术，为用户提供沉浸式的房产预览体验。',
            market: '房地产和家装行业数字化转型需求增长，传统展示方式效果有限。本应用通过VR/AR技术提供沉浸式体验。',
            features: [
                '户型查看：支持不同户型版本选择和鸟瞰视角查看',
                '实时漫游：提供沉浸式的房产预览体验',
                '实时测量：支持空间距离测量和实景对比',
                '构建信息：提供详细的建筑信息概览和构建数据'
            ],
            innovations: [
                'UE5 Lumen全局光照：实现逼真的光影效果',
                'Nanite微多边形几何：支持超高精度模型展示',
                'PBR材质系统：确保材质表现的真实感',
                '动态天气光照：包含动态天气和光照系统'
            ],
            images: [
                'https://myworks.guosisi.top/images/ue5/enter-app.png',
                'https://myworks.guosisi.top/images/ue5/产品信息.png',
                'https://myworks.guosisi.top/images/ue5/选择户型版本.png',
                'https://myworks.guosisi.top/images/ue5/鸟瞰图.png',
                'https://myworks.guosisi.top/images/ue5/测量距离.png'
            ]
        }
    },
    {
        id: 'project8',
        title: '串口调试助手v1.0',
        description: '基于QT6和C++17标准开发的串口通信调试工具，提供直观的界面配置和测试串口通信',
        image: 'https://myworks.guosisi.top/images/gsscom.png',
        thumbnail: 'https://myworks.guosisi.top/images/gsscom.png',
        projectInfo: {
            developmentTime: '2024',
            developer: '郭思思',
            techStack: 'QT6, C++17, QSerialPort'
        },
        details: {
            background: '串口调试助手v1.0是一款基于QT6和C++17标准开发的串口通信调试工具，为用户提供直观的界面来配置和测试串口通信。',
            market: '嵌入式开发和硬件调试领域对串口调试工具需求稳定。本工具提供现代化界面和高效的调试功能。',
            features: [
                '串口配置：串口选择与连接管理、波特率调整、数据位停止位校验位设置、流控制选项配置',
                '数据收发：文本和十六进制数据发送、实时数据接收显示、发送和接收数据统计、数据显示格式切换'
            ],
            innovations: [
                'QT6现代化界面：提供现代化的用户界面',
                'C++17标准：确保代码质量和性能',
                '异步数据处理：避免界面卡顿',
                '高效缓冲机制：优化内存使用'
            ],
            images: [
                'https://myworks.guosisi.top/images/gsscom.png'
            ],
            downloadUrl: 'https://github.com/SisiGuo04/Guosisi-COM/blob/main/Guosisi-COM_boxed.exe'
        }
    },
    {
        id: 'project9',
        title: '基于物联网的智慧农圃灾害预警与管理系统',
        description: '本项目旨在设计并实现一套集环境监测、灾害预警与远程控制于一体的智慧农圃管理系统。',
        image: 'https://myworks.guosisi.top/images/zhipu/zhipu.jpg',
        thumbnail: 'https://myworks.guosisi.top/images/zhipu/zhipu.jpg',
        projectInfo: {
            developmentTime: '2024',
            developer: '郭思思',
            techStack: 'STM32F103C8T6, ESP8266, 传感器技术, Android, TCP通信, I2C协议, ADC数模转换, PWM'
        },
        details: {
            background: '本项目旨在设计并实现一套集环境监测、灾害预警与远程控制于一体的智慧农圃管理系统。系统以STM32F103C8T6微控制器为核心，集成多种传感器实时采集圃内环境数据。',
            market: '智慧农业和物联网技术快速发展，农业自动化和智能监测需求增长。本系统提供完整的农圃管理解决方案。',
            features: [
                '多参数实时监测：全天候采集温度、湿度、空气质量、光照、火焰等关键环境因子',
                '智能灾害预警与响应：检测到明火时自动触发舵机开门、蜂鸣器报警的连锁应急响应',
                '自适应光照调节：根据环境光照强度自动调节LED补光数量',
                '远程可视化监控：用户可通过Android APP远程实时查看农圃内的各项环境数据',
                '双向远程控制：用户通过APP远程手动控制农圃内的设备'
            ],
            innovations: [
                '简化物联网架构：Android APP作为TCP服务器，ESP8266直接上传数据',
                '多传感器融合：火焰、空气质量、温湿度、光照传感器协同工作',
                '智能联动控制：环境参数异常时自动触发相应设备动作',
                '实时数据传输：保证数据传输的实时性'
            ],
            images: [
                'https://myworks.guosisi.top/images/zhipu/1.jpg',
                'https://myworks.guosisi.top/images/zhipu/2.jpg',
                'https://myworks.guosisi.top/images/zhipu/3.jpg',
                'https://myworks.guosisi.top/images/zhipu/4.jpg'
            ]
        }
    },
    {
        id: 'project10',
        title: '基于LoRa的无线水位监测与预警系统',
        description: '基于STM32WLE5CCU6主控芯片的双终端水位监测系统，实现水位采集、预警判断、突变检测与LoRa无线通信',
        image: 'https://myworks.guosisi.top/images/lora-mcu.svg',
        thumbnail: 'https://myworks.guosisi.top/images/lora-mcu.svg',
        projectInfo: {
            developmentTime: '2025.4',
            developer: '郭思思',
            techStack: 'STM32WLE5CCU6, LoRa无线通信, C语言, OLED显示, 电位器传感器'
        },
        details: {
            background: '基于蓝桥杯物联网竞赛平台，使用STM32WLE5CCU6主控芯片，通过电位器采集水位数据，实现两级水位预警、突变检测和OLED显示，并通过LoRa无线通信实现终端间数据同步与报警功能。',
            market: '水位监测在水利工程、环境监测、工业控制等领域需求广泛。本系统提供低功耗、远距离的无线水位监测解决方案。',
            features: [
                '水位数据采集：通过电位器模拟水位传感器，实时采集水位数据',
                '两级预警系统：设置不同水位阈值，实现分级预警机制',
                '突变检测：检测水位急剧变化，及时发出警报',
                'OLED界面显示：实时显示水位数据、预警状态和系统信息',
                'LED状态指示：通过LED灯直观显示系统运行状态和报警级别',
                'LoRa无线通信：终端A与终端B之间实现稳定的远距离数据传输',
                '双终端同步：两个终端实时同步水位数据和报警状态'
            ],
            innovations: [
                'STM32WLE5CCU6集成方案：集成LoRa射频功能的ARM Cortex-M4内核',
                '低功耗设计：优化功耗管理，适合长期部署',
                '双终端架构：终端A负责数据采集，终端B负责监控显示',
                '实时数据同步：LoRa通信保证数据传输的实时性和可靠性'
            ],
            images: [
                'https://myworks.guosisi.top/images/lora-mcu.svg'
            ]
        }
    }
];

// 导出数据（用于模块化环境）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { personalInfo, techStack, socialLinks, projects, wechatQR };
}