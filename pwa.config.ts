import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'Cevta',
  shortName: 'Cevta',
  description: 'Cevta - Thủ Thuật Đa Nền Tảng',
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
      name: 'Cevta',
      shortName: 'Cevta',
      description: 'Cevta - Thủ Thuật Đa Nền Tảng',
      url: '/search/label/News?utm_source=homescreen',
    },
    {
      name: 'Cevta',
      shortName: 'Cevta',
      description: 'Cevta - Thủ Thuật Đa Nền Tảng',
      url: '/search/label/Shop?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: 'bc16f8f3-1e84-4079-b681-cdba4ddbaa27',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.cevta.site/',
} satisfies Config;
