const CACHE_NAME = 'portfolio-v1';
const CACHE_URLS = [
    '/',
    '/index.html',
    '/styles.min.css',
    '/styles01.min.css',
    '/script.min.js',
    '/manifest.json',
    '/images/logo.png',
    '/images/logo.svg',
    '/images/logotp.webp',
    '/images/pps.webp',
    '/images/bmi.webp',
    '/images/ai-resume.png',
    '/images/wxOfficialAccount.webp'
];

// Service Worker 安装事件
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(CACHE_URLS))
            .then(() => self.skipWaiting())
    );
});

// Service Worker 激活事件
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => self.clients.claim())
    );
});

// 请求拦截
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // 如果在缓存中找到响应，则返回缓存的响应
                if (response) {
                    return response;
                }

                // 否则发送网络请求
                return fetch(event.request).then(response => {
                    // 检查是否收到有效的响应
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // 克隆响应，因为响应流只能使用一次
                    const responseToCache = response.clone();

                    // 将响应添加到缓存
                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                });
            })
            .catch(() => {
                // 如果网络请求失败，返回离线页面
                if (event.request.mode === 'navigate') {
                    return caches.match('/404.html');
                }
            })
    );
});