import * as Device from 'expo-device';
import { Platform } from 'react-native';
import Constants, { ExecutionEnvironment } from 'expo-constants';

// Safely import expo-notifications without crashing Expo Go
let Notifications: typeof import('expo-notifications') | null = null;
const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;

try {
  if (!isExpoGo) {
    Notifications = require('expo-notifications');
    
    Notifications?.setNotificationHandler({
      handleNotification: async () => ({
        shouldPlaySound: true,
        shouldSetBadge: false,
        shouldShowBanner: true, 
        shouldShowList: true,   
      }),
    });
  }
} catch (error) {
  console.warn("expo-notifications native module is disabled in Expo Go on Android.");
}

// Request notification token
export async function registerForPushNotificationsAsync(): Promise<string | undefined> {
  if (isExpoGo || !Notifications) {
    console.log("Push notifications require a Development Build (npx expo run:android). Skipping in Expo Go.");
    return undefined;
  }

  let token: string | undefined;

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      console.log("Permission not granted for notifications");
      return undefined;
    }
    const pushTokenData = await Notifications.getExpoPushTokenAsync();
    token = pushTokenData.data;
  } else {
    console.log("Push notifications require a physical device.");
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF236C',
    });
  }
  return token;
}

// Send notification
export async function sendPushNotifications(expoPushToken: string, title: string, body: string) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: title,
    body: body,
  };
  try {
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  } catch (error) {
    console.error('Error sending push notification:', error);
  }
}