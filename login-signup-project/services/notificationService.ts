import * as Device from 'expo-device';
import { Platform } from 'react-native';
import Constants, { ExecutionEnvironment } from 'expo-constants';

let Notifications: typeof import('expo-notifications') | null = null;
const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;

if (!isExpoGo) {
  try {
    Notifications = require('expo-notifications');
    Notifications?.setNotificationHandler({
      handleNotification: async () => ({
        shouldPlaySound: true,
        shouldSetBadge: false,
        shouldShowBanner: true,
        shouldShowList: true,
      }),
    });
  } catch (e) {
    console.warn("Notifications module skipped in Expo Go");
  }
}

export async function registerForPushNotificationsAsync(): Promise<boolean> {
  if (isExpoGo || !Notifications) {
    console.log("Notifications disabled in Expo Go. Use a Development Build.");
    return false;
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF236C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    return finalStatus === 'granted';
  }
  return false;
}

export async function sendPushNotifications(title: string, body: string) {
  if (isExpoGo || !Notifications) {
    console.log(`[Expo Go Simulation] Notification: ${title} - ${body}`);
    return;
  }

  try {
    await Notifications.scheduleNotificationAsync({
      content: { title, body, sound: 'default' },
      trigger: null,
    });
  } catch (error) {
    console.error('Error sending notification:', error);
  }
}