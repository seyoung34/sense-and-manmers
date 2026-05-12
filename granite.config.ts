import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'sense-and-manners',
  brand: {
    displayName: '센스있게, 매너있게',
    primaryColor: '#0071E3',
    // 앱인토스 콘솔에서 아이콘을 업로드한 뒤 복사한 URL로 교체하세요.
    icon: 'https://sense-and-manmers.vercel.app/favicon.svg',
  },
  web: {
    host: 'localhost',
    port: 5173,
    commands: {
      dev: 'vite --host 0.0.0.0',
      build: 'tsc -b && vite build',
    },
  },
  permissions: [],
  outdir: 'dist',
  webViewProps: {
    type: 'partner',
    bounces: false,
    pullToRefreshEnabled: false,
    overScrollMode: 'never',
    allowsBackForwardNavigationGestures: false,
  },
});
