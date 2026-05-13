import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'sense-and-manners',
  brand: {
    displayName: '센스있게, 매너있게',
    primaryColor: '#0071E3',
    icon: 'https://sense-and-manmers.vercel.app/app-logo.png',
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
