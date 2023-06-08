import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ca.technolibre.ore',
  appName: 'ore',
  webDir: 'dist/ore',
  server: {
    androidScheme: 'https'
  }
};

export default config;
