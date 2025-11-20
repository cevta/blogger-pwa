import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'Yuzu Tips',
  shortName: 'Yuzu Tips',
  description: 'Blog Chia Sẻ Các Thủ Thuật Về Công Nghệ, Website, Facebook, Blogger... Và Rất Nhiều Thứ Khác.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#121212',
  themeColor: '#E5C100',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Yuzu Tips',
      shortName: 'Yuzu Tips',
      description: 'Blog Chia Sẻ Các Thủ Thuật Về Công Nghệ, Website, Facebook, Blogger... Và Rất Nhiều Thứ Khác.',
      url: '/search/label/News?utm_source=homescreen',
    },
    {
      name: 'Yuzu Tips',
      shortName: 'Yuzu Tips',
      description: 'Blog Chia Sẻ Các Thủ Thuật Về Công Nghệ, Website, Facebook, Blogger... Và Rất Nhiều Thứ Khác.',
      url: '/search/label/Shop?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: '8914e8c3-e191-45a1-b192-708b8b6d4b67',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.yuzutips.site/',
} satisfies Config;
