import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.technolibre.capacitor.notification',
  appName: 'capacitor-notification',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    PushNotifications: {
        presentationOptions: ["badge", "sound", "alert"]
    }
}
};

export default config;
